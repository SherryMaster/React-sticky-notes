import NoteCard from "../components/NoteCard";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import Controls from "../components/Controls";
import { useAuth } from "../context/AuthContext";

const NotesPage = () => {
  const { notes } = useContext(NoteContext);
  const { logout, user } = useAuth();

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          zIndex: 10000,
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <span style={{ color: "white" }}>Welcome, {user?.name}</span>
        <button
          onClick={logout}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {notes.map((note) => (
        <NoteCard key={note.$id} note={note} />
      ))}
      <Controls />
    </div>
  );
};

export default NotesPage;
