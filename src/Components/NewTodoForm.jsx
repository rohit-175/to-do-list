import React, { useState } from "react";
import "../CSS/NewTodoForm.css";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === ""){
      alert("Todo cannot be empty.")
      return;
    }
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <input
          type="text"
          value={newItem}
          placeholder="Enter your todo..."
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="btn">Add</button>
      </div>
    </form>
  );
}
