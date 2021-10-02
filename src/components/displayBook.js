import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
import Book from './book';

const Books = () => {
  const books = useSelector((state) => state);
  const result = [];
  Object.keys(books.booksReducer).forEach((key) => {
    const { title, category } = books.booksReducer[key][0];
    result.push(<Book title={title} category={category} key={key} id={key} />);
  });
  return result;
};

export default Books;
