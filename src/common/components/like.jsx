import React from "react";

const Like = ({ item, isLiked, onLike }) => {
  return (
    <i
      className={isLiked ? "fa fa-heart-o" : "fa fa-heart"}
      onClick={() => onLike(item)}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
