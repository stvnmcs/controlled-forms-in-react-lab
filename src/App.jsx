// src/App.jsx

import { useState } from "react";
import "./App.css";
import Bookshelf from "./components/Bookshelf";
import DisplayBookshelf from "./components/DisplayBookshelf";

const App = () => {
  const [books, setBooks] = useState([{title: "I'm trash at CSS" , author: 'Chandler'}]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });

  function handleInputChange(event) {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setBooks([ ...books, newBook]);
    setNewBook({ title: "", author: "" });
    
  }


  return (
    <>
      <h1>My Bookshelf</h1>

      <Bookshelf
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        newBook={newBook}
      />

      <DisplayBookshelf 
      books = {books}
      
      />
    </>
  );
};

export default App;
