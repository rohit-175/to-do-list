import React from "react";

export function TodoItem({ id, title, completed, toggleTodo, deleteTodo, setEditingTodoId }) {
  const handleEditClick = () => {
    setEditingTodoId(id);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <span>{title}</span>
      <button onClick={handleEditClick} className="btn">
        Edit
      </button>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
}
