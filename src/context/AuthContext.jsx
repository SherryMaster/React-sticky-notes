import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwrite/config";
import { ID } from "appwrite";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const login = async (email, password) => {
    try {
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      setUser(user);
      return user;
    } catch (error) {
      throw error;
    }
  };
  const register = async (email, password, name) => {
    try {
      await account.create(ID.unique(), email, password, name);
      return await login(email, password);
    } catch (error) {
      throw error;
    }
  };
  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      throw error;
    }
  };
  const checkAuth = async () => {
    try {
      const user = await account.get();
      setUser(user);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);
  const value = {
    user,
    login,
    register,
    logout,
    loading,
  };
  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
};

export default AuthProvider;
