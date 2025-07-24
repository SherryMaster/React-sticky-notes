import { useAuth } from "./context/AuthContext";
import NoteProvider from "./context/NoteContext";
import LoginPage from "./pages/LoginPage";
import NotesPage from "./pages/NotesPage";

function App() {
  const { loading, user } = useAuth();

  return (
    <div id="app">
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : user ? (
        <NoteProvider>
          <NotesPage />
        </NoteProvider>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
