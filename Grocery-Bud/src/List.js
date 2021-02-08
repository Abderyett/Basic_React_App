import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';

const List = ({ grocery, deleteHandler, editItem }) => (
  <>
    {grocery.map((el) => {
      const { id, title } = el;
      return (
        <article className="grocery-item" key={id}>
          <p className="title">{title}</p>
          <div className="btn-container">
            <button type="button" className="edit-btn" onClick={() => editItem(id)}>
              <FaEdit />
            </button>
            <button type="button" className="delete-btn" onClick={() => deleteHandler(id)}>
              <FaTrash />
            </button>
          </div>
        </article>
      );
    })}
  </>
);
List.propTypes = { grocery: PropTypes.array.isRequired, deleteHandler: PropTypes.func, editItem: PropTypes.func };

export default List;
