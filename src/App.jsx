import React, { useEffect, useState } from "react";
import { NewTodoForm } from "./Components/NewTodoForm";
import { TodoList } from "./Components/TodoList";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => [
     ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false }
    ]);
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id? {...todo, completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id!== id)
    );
  }

  function sortTodos(order) {
    setSortOrder(order);
    setTodos(currentTodos =>
      [...currentTodos].sort((a, b) => {
        if (order === "asc") {
          return a.title.localeCompare(b.title);
        } else {
          return b.title.localeCompare(a.title);
        }
      })
    );
  }

  function editTodo(id, newTitle) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id? {...todo, title: newTitle } : todo
      )
    );
  }

  return (
    <>
      <h1 className="header">Todo List</h1>
      <NewTodoForm onSubmit={addTodo} /><br />
      <div className="sort-buttons">
        <button className="btn" onClick={() => sortTodos("asc")}>Sort Ascending</button>
        <button className="btn" onClick={() => sortTodos("desc")}>Sort Descending</button>
      </div>
      <br />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </>
  );
}
