import React from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = ({ title, category, id }) => {
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
        {category}
      </p>
      <button onClick={removeBookFromStore} type="submit" aria-label="Decrement value">
        remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  category: PropTypes.string,
  id: PropTypes.number,
};

Book.defaultProps = {
  title: '1',
  category: 'white',
  id: 1,
};
export default Book;
