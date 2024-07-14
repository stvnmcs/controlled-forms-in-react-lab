
const DisplayBookshelf = function ({ books }) {
  return (
    <ol value="">
      <div className="bookCardsDiv">
        
          {books.map((book) => (
            <div className="bookCard">
            <li>
              {book.title} by {book.author}
            </li>
            </div>
          ))}
        
      </div>
    </ol>
  );
};

export default DisplayBookshelf;