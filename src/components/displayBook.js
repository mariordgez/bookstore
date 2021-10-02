import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
import Book from './book';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  return books.map((book) => (
    <Book key={book.id} title={book.title} author={book.author} id={book.id} />
  ));
};

export default Books;
