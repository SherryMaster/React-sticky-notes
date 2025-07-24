import { useContext, useEffect, useRef, useState } from "react";
import { db } from "../appwrite/database";
import Spinner from "../icons/Spinner";
import { autoGrow, bodyParser, setNewOffset, setZIndex } from "../utils";
import DeleteButton from "./DeleteButton";
import { NoteContext } from "../context/NoteContext";

const NoteCard = ({ note }) => {
  let mouseStartPos = { x: 0, y: 0 };

  const colors = JSON.parse(note.colors);
  const body = bodyParser(note.body);

  const [position, setPositon] = useState(JSON.parse(note.position));
  const [saving, setSaving] = useState(false);

  const cardRef = useRef(null);
  const textAreaRef = useRef(null);
  const keyUpTimer = useRef(null);

  const { setSelectedNote } = useContext(NoteContext);

  useEffect(() => {
    autoGrow(textAreaRef);
    setZIndex(cardRef.current);
  }, []);

  const mouseDown = (e) => {
    setSelectedNote(note);
    setZIndex(cardRef.current);
    
    if (e.target.className !== "card-header") return;

    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  };

  const mouseMove = (e) => {
    //1 - Calculate move direction
    const moveDirection = {
      x: mouseStartPos.x - e.clientX,
      y: mouseStartPos.y - e.clientY,
    };

    //2 - Update start position for next move.
    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;

    //3 - Update card top and left position.

    const newPosition = setNewOffset(cardRef.current, moveDirection);
    setPositon(newPosition);
  };

  const mouseUp = () => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);

    const newPosition = setNewOffset(cardRef.current);
    saveData("position", newPosition);
  };

  const saveData = async (key, value) => {
    // Handle zIndex as plain integer, other values as JSON strings
    const payload = { [key]: JSON.stringify(value) };
    try {
      await db.notes.update(note.$id, payload);
    } catch (error) {
      console.log(error);
    }
    setSaving(false);
  };

  const handleKeyUp = async () => {
    setSaving(true);

    if (keyUpTimer.current) {
      clearTimeout(keyUpTimer.current);
    }

    keyUpTimer.current = setTimeout(async () => {
      saveData("body", textAreaRef.current.value);
    }, 2000);
  };

  return (
    <div
      className="card"
      ref={cardRef}
      style={{
        backgroundColor: colors.colorBody,
        top: `${position.y}px`,
        left: `${position.x}px`,
        zIndex: note.zIndex,
        color: colors.colorText,
      }}
      onMouseDown={mouseDown}
    >
      <div
        className="card-header"
        style={{ backgroundColor: colors.colorHeader }}
      >
        <DeleteButton noteId={note.$id} />
        {saving && (
          <div className="card-saving">
            <Spinner color={colors.colorText} />
            <span style={{ color: colors.colorText }}>Saving...</span>
          </div>
        )}
      </div>
      <div className="card-body">
        <textarea
          ref={textAreaRef}
          style={{ color: colors.colorText }}
          defaultValue={body}
          onInput={() => autoGrow(textAreaRef)}
          onFocus={() => setZIndex(cardRef.current)}
          onKeyUp={handleKeyUp}
        ></textarea>
      </div>
    </div>
  );
};

export default NoteCard;
