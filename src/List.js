import React from "react";
import "./List.css";

import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ item }) => {
  return (
    <div className="grocery-list">
      {item.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button type="button" className="edit-btn">
                <FaEdit />
              </button>
              <button type="button" className="delete-btn">
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
