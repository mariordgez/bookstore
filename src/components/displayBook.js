import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
import Book from './book';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  const result = [];
  Object.keys(books).forEach((key) => {
    const { title, author, id } = books[key];
    result.push(<Book title={title} author={author} id={id} />);
  });
  return result;
};

export default Books;
