import React from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  const removeBookFromStore = (e) => {
    e.preventDefault();

    dispatch(removeBook(id));
  };
  return (
    <div>
      <p>
        {title}
        <span> by </span>
        {author}
      </p>
      <button onClick={removeBookFromStore} type="submit" aria-label="Decrement value">
        remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  author: PropTypes.string,
  id: PropTypes.number,
};

Book.defaultProps = {
  title: '1',
  author: 'white',
  id: 1,
};
export default Book;
