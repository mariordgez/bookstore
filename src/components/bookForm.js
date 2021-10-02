import { React, useState } from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import { createBook, getBooks } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const updateTitle = (e) => setTitle(e.target.value);
  const updateCategory = (e) => setCategory(e.target.value);

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      category,
    };
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(createBook(newBook));
    dispatch(getBooks());
    setTitle('');
    setCategory('');
  };

  return (
    <form className="Lesson-Panel-Form" onSubmit={submitBookToStore}>
      <h2 className="Title-form">Add a new Book</h2>
      <br />
      <input
        className="Lesson-Panel-input"
        type="text"
        name="title"
        placeholder="Add a title.."
        onChange={updateTitle}
        value={title}
      />
      <br />
      <input
        className="Lesson-Panel-input"
        type="text"
        name="author"
        placeholder="Add a category.."
        onChange={updateCategory}
        value={category}
      />
      <br />
      <input className="Remove" type="submit" value="Submit" />
    </form>
  );
};

export default BookForm;
