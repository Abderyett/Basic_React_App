import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';

const List = ({ grocery, deleteHandler }) => (
  <>
    {grocery.map((el, index) => (
      <article className="grocery-item" key={index}>
        <p className="title">{el}</p>
        <div className="btn-container">
          <button type="button" className="edit-btn">
            <FaEdit />
          </button>
          <button type="button" className="delete-btn" onClick={() => deleteHandler(index)}>
            <FaTrash />
          </button>
        </div>
      </article>
    ))}
  </>
);
List.propTypes = { grocery: PropTypes.array.isRequired, deleteHandler: PropTypes.func };

export default List;
