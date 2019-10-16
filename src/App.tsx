import React, {useState} from 'react';
import './App.css';

import FlowEditor from './components/FlowEditor'
import DocumentList from './components/DocumentList'
import SideBar from './components/SideBar'

interface IDocument {
  title: string
  id: number
  tags: string[]
  body: string
}

enum Mode {
  Write = 'write', Edit = 'edit', Format = 'format'
}

const docs: IDocument[] = [
  { title: "Indian Camp", id: 1, tags: ['first', 'hemmingway'], body: '' },
  { title: "The Sun Also Rises", id: 2, tags: ['second', 'hemmingway'], body: '' },
  { title: "A Farewell to Arms", id: 3, tags: ['third', 'hemmingway'], body: '' },
  { title: "Death in the Afternoon", id: 4, tags: ['fourth', 'hemmingway'], body: '' },
  { title: "Green Hills of Africa", id: 5, tags: ['fifth', 'hemmingway'], body: '' },
  { title: "For Whom the Bell Tolls", id: 6, tags: ['sixth', 'hemmingway'], body: '' },
  { title: "The Old Man and the Sea", id: 7, tags: ['seventh', 'hemmingway'], body: '' }
]

const App: React.FC = () => {
  const [documents, setDocuments] = useState<IDocument[]>(docs)
  const [mode, setMode] = useState<Mode>(Mode.Write)
  const [currentDocument, setCurrentDocument] = useState<IDocument>()

  const handleDocumentSelect = (id: number) => {
    if(!documents) return [];
    const newCurrent = documents.find(doc => doc.id === id)
    setCurrentDocument(newCurrent)
  }

  return (
    <div className="App">
      <div id='a' className='a'>
        <SideBar
          selectMode={setMode}
        />
        <DocumentList
          documents={documents}
          currentDocument={currentDocument}
          selectedDocument={handleDocumentSelect}
        />
        <FlowEditor
          mode={mode}
          currentDocument={currentDocument}
        />
      </div>
    </div>
  );
}

export default App;
