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
  });

  const books = useSelector((state) => state);
  console.log(books.booksReducer);

  return books.booksReducer.map((book) => (
    <Book key={book.id} title={book.title} category={book.category} id={book.id} />
  ));
};

export default Books;
