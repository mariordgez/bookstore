import React, { useEffect } from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import BookForm from './bookForm';
import Books from './displayBook';
import { getBooks } from '../redux/books/books';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
    return null;
  }, []);
  return (
    <div>
      <Books />
      <div className="Line" />
      <BookForm />
    </div>
  );
};

export default Home;
