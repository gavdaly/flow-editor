import React, { Component } from "react";

import "./DocumentList.css";

import DocumentItem from "./DocumentItem";
import DocumentFilter from "./DocumentFilter";
import LeftArrow from "./icons/LeftArrow";
import HoverDrawer from "./HoverDrawer";

class DocumentList extends Component {
  state = {
    filterString: ""
  };

  handleDocumentFilter = string => {
    this.setState({ filterString: string });
  };

  render() {
    const filteredList = this.props.documents.filter(d => {
      const matchesTags = d.tags.reduce((previous, current) => {
        return previous || current.includes(this.state.filterString);
      }, false);
      return d.title.includes(this.state.filterString) || matchesTags;
    });

    const documentList = filteredList.map(doc => {
      return (
        <li key={doc.id}>
          <DocumentItem
            title={doc.title}
            tags={doc.tags}
            id={doc.id}
            onDocumentSelected={this.props.selectedDocument}
          />
        </li>
      );
    });

    const icon = <LeftArrow />;

    return (
      <HoverDrawer icon={icon}>
        <div className="documentList">
          <DocumentFilter
            onFilterChange={this.handleDocumentFilter}
            string={this.state.filterString}
          />
          <ul style={{ listStyle: "none" }}>{documentList}</ul>
        </div>
      </HoverDrawer>
    );
  }
}

export default DocumentList;
