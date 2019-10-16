import React from "react";

import "./DocumentItem.css";

const DocumentItem = ({ title, tags, id, onDocumentSelected }) => {
  const _click = () => {
    return onDocumentSelected(id);
  };
  return (
    <div className="documentItem" onClick={_click}>
      {title}
      <div className="documentTitle">
        {tags.map(tag => {
          return (
            <span key={tag} className="tag">
              #{tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default DocumentItem;
