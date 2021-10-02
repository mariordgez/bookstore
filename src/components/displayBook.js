import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
import Display from './display';

const DisplayBook = () => {
  const books = useSelector((state) => state.booksReducer);
  const result = [];
  Object.keys(books).forEach((key) => {
    const { title, author } = books[key];
    result.push(<Display title={title} author={author} />);
  });
  return result;
};

export default DisplayBook;
