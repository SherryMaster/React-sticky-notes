import Plus from "../icons/Plus";
import colors from "../assets/colors.json";
import { useRef, useState, useContext } from "react";
import { db } from "../appwrite/database";
import { NoteContext } from "../context/NoteContext";
import Spinner from "../icons/Spinner";
import { useAuth } from "../context/AuthContext";
 
const AddButton = () => {
    const [loading, setLoading] = useState(false)

    const { setNotes, setSelectedNote } = useContext(NoteContext);
    const { user } = useAuth();

    const addNote = async () => {
        if (loading) return;
        setLoading(true);

        const payload = {
            colors: JSON.stringify(colors[0]),
            position: JSON.stringify({
                x: 10, // Default starting position for new notes.
                y: 10, // Default starting position for new notes.
            }),
            userId: user.$id, // Add the user ID to the payload.
        }

        try {
            const response = await db.notes.create(payload);
            setSelectedNote(response); // Select the newly created note.
            setNotes((prevNotes) => [response, ...prevNotes]);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id="add-btn" onClick={addNote}>
            {loading ? <Spinner color="#fff" /> : <Plus />}
        </div>
    );
};

export default AddButton;
