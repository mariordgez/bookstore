import { React, useState } from 'react';
import '../App.css';
// import useDispatch hook
import { useDispatch } from 'react-redux';
// import your Action Creators
import { addBook } from '../redux/books/books';

let booksID = 1;

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const updateTitle = (e) => setTitle(e.target.value);
  const updateAuthor = (e) => setAuthor(e.target.value);
  const submitBookToStore = (e) => {
    const id = booksID;
    e.preventDefault();
    const newBook = {
      id,
      title,
      author,
    };
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
    booksID += 1;
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={submitBookToStore}>
      <h2>Add a new Book</h2>
      <input
        type="text"
        name="title"
        placeholder="Add a title.."
        onChange={updateTitle}
        value={title}
      />
      <input
        type="text"
        name="author"
        placeholder="Add an author.."
        onChange={updateAuthor}
        value={author}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default BookForm;
