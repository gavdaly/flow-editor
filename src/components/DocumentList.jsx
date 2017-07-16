import React, { Component } from 'react'

import './DocumentList.css'

import DocumentItem from './DocumentItem'
import DocumentFilter from './DocumentFilter'
import LeftArrow from './icons/LeftArrow'
import HoverDrawer from './HoverDrawer'

class DocumentList extends Component  {
  state = {
    filterString: ''
  }





  render() {

    const documentList = this.props.documents.map(doc => {
      return (
        <li
          key={doc.id}
        >
          <DocumentItem
            title={doc.title}
            tags={doc.tags}
            id={doc.id}
            onDocumentSelected={this.props.selectedDocument}
          />
        </li>
      )
    })

    const icon = <LeftArrow />

    if(this.props.documentList) {
      const filteredList = this.props.documentList.filter(d => {
        const matchesTags = d.tags.reduce((previous, current) => {
          return previous || current.includes(this.state.filterString)
        }, false)
        return d.title.includes(this.state.filterString) || matchesTags
      })
    }

    return (
      <HoverDrawer
        icon={icon}
      >
        <div className='documentList'>
          <DocumentFilter />
          <ul style={{listStyle: 'none'}}>
            {documentList}
          </ul>
        </div>
      </HoverDrawer>
    )
  }
}

export default DocumentList
