import * as React from "react";

import "./DocumentItem.css";

interface IDocumentItemProps {
  title: string;
  tags: string[];
  id: string | number;
}

export const DocumentItem: React.FC<IDocumentItemProps> = ({
  title,
  tags,
  id
}) => {
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
