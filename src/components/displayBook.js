import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';

const DisplayBook = () => {
  const books = useSelector((state) => state.booksReducer);
  Object.keys(books).forEach((key) => {
    console.log(books[key].author);
    const { title, author } = books[key];
    return (
      <div>
        <p>{title}</p>
        <p>{author}</p>
        <button type="submit" aria-label="Decrement value">
          remove
        </button>
      </div>
    );
  });
};

export default DisplayBook;
