import React from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import { removeBook } from '../redux/books/books';

const Display = ({ title, author, id }) => {
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

Display.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  author: PropTypes.string,
  id: PropTypes.number,
};

Display.defaultProps = {
  title: '1',
  author: 'white',
  id: 1,
};
export default Display;
