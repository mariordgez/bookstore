import React from 'react';
import '../App.css';

const BookForm = () => (
  <form>
    <h2>Add a new Book</h2>
    <input type="text" name="name" />
    <input type="submit" value="Submit" />
  </form>
);
export default BookForm;
