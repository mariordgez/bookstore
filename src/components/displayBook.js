import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
import Book from './book';

const Books = () => {
  const books = useSelector((state) => state);
  console.log(books);
  return books.map((book) => (
    <Book key={book.id} title={book.title} category={book.category} id={book.id} />
  ));
};

export default Books;
