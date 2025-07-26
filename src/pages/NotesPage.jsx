import NoteCard from "../components/NoteCard";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import Controls from "../components/Controls";
import { useAuth } from "../context/AuthContext";
import Logo from "../components/Logo";

const NotesPage = () => {
  const { notes } = useContext(NoteContext);
  const { logout, user } = useAuth();

  return (
    <div>
      <div className="app-header">
        <Logo size={28} variant="blue" className="app-logo" />
        <span className="welcome-text">Welcome, {user?.name}</span>
        <button onClick={logout} className="logout-button">
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
