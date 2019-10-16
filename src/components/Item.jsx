import React from "react";

const Item = ({ val, onClick }) => {
  const _click = () => {
    onClick(val);
  };
  return <div onClick={_click}>{val}</div>;
};

export default Item;
