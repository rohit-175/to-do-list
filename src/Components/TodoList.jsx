import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import { EditTodoForm } from "./EditTodoForm";
import "../CSS/TodoList.css"

export function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  const [editingTodoId, setEditingTodoId] = useState(null);

  return (
    <>
    <ul className="list">
      {todos.length === 0 && <li>No Todos</li>}
      {todos.map((todo) => (
        <li key={todo.id}>
          {editingTodoId === todo.id ? (
            <EditTodoForm
              currentTitle={todo.title}
              onSave={(newTitle) => {
                editTodo(todo.id, newTitle);
                setEditingTodoId(null);
              }}
              onCancel={() => setEditingTodoId(null)}
            />
          ) : (
            <TodoItem
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              setEditingTodoId={setEditingTodoId}
            />
          )}
        </li>
      ))}
    </ul>
    </>
  );
}