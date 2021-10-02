import React from 'react';
import '../App.css';
import BookForm from './bookForm';
import Books from './displayBook';

const Home = () => (
  <div>
    <Books />
    <BookForm />
  </div>
);
export default Home;
