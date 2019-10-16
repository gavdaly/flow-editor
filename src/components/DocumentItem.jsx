import React from "react";

import "./DocumentItem.css";

const DocumentItem = ({ title, tags, id, onDocumentSelected }) => {
  const _click = () => {
    return onDocumentSelected(id);
  };
  return (
    <div className="documentItem" onClick={_click}>
      {title}
      <ul className="documentTitle">
        {tags.map(tag => {
          return (
            <li key={tag} className="tag">
              #{tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DocumentItem;
