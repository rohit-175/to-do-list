import React, { useState } from "react";
import "../CSS/EditTodoForm.css";

export function EditTodoForm({ currentTitle, onSave, onCancel }) {
  const [newTitle, setNewTitle] = useState(currentTitle);

  function handleSubmit(e) {
    if(newTitle.trim() === ""){
      alert("Todo cannot be empty.")
      return
    }
    e.preventDefault();
    onSave(newTitle);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button type="submit" className="btn">
        Save
      </button>
      <button type="button" onClick={onCancel} className="btn btn-danger">
        Cancel
      </button>
    </form>
  );
}
