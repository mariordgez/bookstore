import React from 'react';
import '../App.css';

const BookForm = () => (
  <form>
    <label>
      Add a new Book
      <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
  </form>
);

export default BookForm;
