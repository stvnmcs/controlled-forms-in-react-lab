import { useState } from 'react';

const Bookshelf = function ({handleInputChange, handleSubmit, newBook}) {
   
    return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        {/* Form will go here */}
        <form onSubmit = {handleSubmit} >
            <label htmlFor="author">Author: </label>
            <input
              id="author"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
          <br />
            <label htmlFor="title">Title: </label>
            <input
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />
            <br />
            <button type='submit'>Submit</button>
          </form>
      </div>
      
    </div>
    
    )     
};
    
export default Bookshelf