import React, { useEffect } from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
    return null;
  }, []);
  const books = useSelector((state) => state);
  console.log('pre action');
  console.log(books.booksReducer);
  const result = [];
  Object.keys(books.booksReducer).forEach((key) => {
    const { title, category } = books.booksReducer[key][0];
    result.push(<Book title={title} category={category} key={key} />);
  });
  return result;
};

export default Books;
