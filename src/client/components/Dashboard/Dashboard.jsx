import React, {useState, useEffect} from 'react';
import {CgFolder} from 'react-icons/cg';
import './Dashboard.css';

const Dashboard = ({projects, viewHandler}) => {
  const [showProjects, setShowProjects] = useState(true);
  const [selectedProject, setSelectedProject] = useState({});

  const selectProject = (event) => {
    const id = event.target.getAttribute('data-doc-id');
    if (id) {
      setSelectedProject(projects[id]);
      viewHandler(id);
    }
  };

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div className='Dashboard'>
      {
        projects.map((project, i) => (
          <div key={project._id}>
            <div key={i} className='dash-doc-folder' onClick={selectProject}>
              <CgFolder className='onclick' size={100} data-doc-id={i} />
              {project.name}
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Dashboard;
