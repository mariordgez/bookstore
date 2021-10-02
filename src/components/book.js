import React from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, getBooks } from '../redux/books/books';

const Book = ({ title, category, id }) => {
  const dispatch = useDispatch();

  const removeBookFromStore = (e) => {
    e.preventDefault();

    dispatch(removeBook(id));
    dispatch(getBooks());
  };
  return (
    <div className="Lesson-Panel">
      <div className="Flex-1">
        <span className="School-of">{category}</span>
        <br />
        <span className="Title Text-Style-6">{title}</span>
        <br />
        <span className="Suzanne-Collins">Suzanne Collins</span>
        <div className="Flex">
          <span className="Comments">Comments</span>
          <div className="Line-2" />
          <span className="Comments">Remove</span>
          <div className="Line-2" />
          <span className="Comments">Edit</span>
        </div>
      </div>
      <div>
        <span className="School-of">CURRENT CHAPTER</span>
        <br />
        <span className="Comments black">Introduction</span>
        <br />
        <button
          className="Remove"
          onClick={removeBookFromStore}
          type="submit"
          aria-label="Decrement value"
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  category: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Book.defaultProps = {
  title: '1',
  category: 'white',
  id: '1',
};
export default Book;
