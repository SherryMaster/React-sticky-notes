import { useState } from 'react';
import Spinner from '../icons/Spinner';
import Trash from '../icons/Trash';
import { db } from '../appwrite/database';
import { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';

const DeleteButton = ({ noteId }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const { setNotes } = useContext(NoteContext);

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            await db.notes.delete(noteId);
            setNotes((prevNotes) => prevNotes.filter((note) => note.$id !== noteId));
        } catch (error) {
            console.log(error);
            setIsDeleting(false);
        }
    };

  return (
    <div onClick={handleDelete}>
        {isDeleting ? (
            <Spinner />
        ) : (
            <Trash />
        )}
    </div>
    
  )
}

export default DeleteButton