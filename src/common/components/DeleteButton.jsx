import React from "react";

const DeleteButton = ({ item, onDelete }) => {
  return (
    <button onClick={() => onDelete(item)} className="btn btn-danger">
      Delete
    </button>
  );
};

export default DeleteButton;
