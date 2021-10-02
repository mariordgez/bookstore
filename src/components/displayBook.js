import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
import Display from './display';

const DisplayBook = () => {
  const books = useSelector((state) => state.booksReducer);
  const result = [];
  Object.keys(books).forEach((key) => {
    const { title, author, id } = books[key];
    result.push(<Display title={title} author={author} id={id} />);
  });
  return result;
};

export default DisplayBook;
