import { createContext, useEffect, useState } from "react";
import { db } from "../appwrite/database";
import Spinner from "../icons/Spinner";
import { Query } from "appwrite";
import { useAuth } from "./AuthContext";

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

  const init = async () => {
    const queries = [Query.equal("userId", user.$id)];

    const response = await db.notes.list(queries);
    setNotes(response.documents);
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, [user]);

  const contextData = {
    notes,
    setNotes,
    selectedNote,
    setSelectedNote,
  };

  return (
    <NoteContext.Provider value={contextData}>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Spinner size="100" color="#fff" />
        </div>
      ) : (
        children
      )}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
