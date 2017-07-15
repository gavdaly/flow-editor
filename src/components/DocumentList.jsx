import React from 'react'

import DocumentItem from './DocumentItem'
import DocumentFilter from './DocumentFilter'
import LeftArrow from './icons/LeftArrow'
import HoverDrawer from './HoverDrawer'

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
  const icon = <LeftArrow />
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

export default DocumentList
