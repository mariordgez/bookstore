import React from 'react';
import '../App.css';
import BookForm from './bookForm';
import DisplayBook from './displayBook';

const Home = () => (
  <div>
    <DisplayBook />
    <BookForm />
  </div>
);
export default Home;
