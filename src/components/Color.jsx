import { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";
import { db } from "../appwrite/database";
import Spinner from "../icons/Spinner";

const Color = ({ color }) => {
  const { selectedNote, setNotes, notes } = useContext(NoteContext);
  const [loading, setLoading] = useState(false);

  const changeColor = async () => {
    if (loading) return;
    try {
        setLoading(true);
      const currentNoteIndex = notes.findIndex(
        (note) => note.$id === selectedNote.$id
      );

      const updatedNote = {
        ...notes[currentNoteIndex],
        colors: JSON.stringify(color),
      };

      const newNotes = [...notes];
      newNotes[currentNoteIndex] = updatedNote;
      
      await db.notes.update(selectedNote.$id, {
        colors: JSON.stringify(color),
      });
      setNotes(newNotes);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div
      onClick={changeColor}
      className="color"
      style={{ backgroundColor: color.colorHeader, borderColor: color.colorText }}
    >
      {loading && <Spinner color={color.colorText} />}
    </div>
  );
};

export default Color;
