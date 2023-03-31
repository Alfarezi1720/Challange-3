import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoList from "./pages/TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoSearch from "./pages/TodoSearch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todosearch" element={<TodoSearch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
