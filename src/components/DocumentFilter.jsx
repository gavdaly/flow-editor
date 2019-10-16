import React from "react";

const DocumentFilter = ({ onFilterChange, string }) => {
  const _onChange = e => {
    onFilterChange(e.target.value);
  };
  return <input onChange={_onChange} value={string} />;
};

export default DocumentFilter;
