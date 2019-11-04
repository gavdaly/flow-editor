import React from "react";

import "./DocumentItem.css";

const DocumentItem = ({ title, tags, id }) => {
  const _click = () => {
    console.log(id);
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
