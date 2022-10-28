import React, {useState, useEffect} from 'react';
import {CgFolder} from 'react-icons/cg';
import './Dashboard.css';

const Dashboard = ({documents, viewHandler}) => {
  // console.log('DASHBOARD GOT:', documents);
  const [showDocuments, setShowDocuments] = useState(true);
  const [documentsList, setDocumentsList] = useState(documents);
  const [selectedDocument, setSelectedDocument] = useState({});

  const selectDocument = (event) => {
    const id = event.target.getAttribute('data-doc-id');
    if (id) {
      setSelectedDocument(documents[id]);
      viewHandler(id);
    }
  };

  const toggleDocuments = () => {
    setShowDocuments(!showDocuments);
  };

  return (
    <div className='Dashboard'>
      {
        documents.map((project, i) => (
          <div key={project._id}>
            <div key={i} className='dash-doc-folder' onClick={selectDocument}>
              <CgFolder className='onclick' size={100} data-doc-id={i} />
              {project._id}
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Dashboard;
