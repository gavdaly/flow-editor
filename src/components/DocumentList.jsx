import React from 'react'

import DocumentItem from './DocumentItem'
import DocumentFilter from './DocumentFilter'
import LeftArrow from './icons/LeftArrow'

const DocumentList = ({activeDocument, documents}) => {
  const documentList = documents.map(doc => {
    return (
      <li
        key={doc.id}
      >
        <DocumentItem
          title={doc.title}
        />
      </li>
    )
  })
  return (
    <div className='documentList'>
      <DocumentFilter />
      <ul style={{listStyle: 'none'}}>
        {documentList}
      </ul>
      <LeftArrow />
    </div>
  )
}

export default DocumentList
