import React, {useState, useEffect} from 'react';
import {CgFolder} from 'react-icons/cg';
import './Dashboard.css';

const Dashboard = ({projects, viewHandler}) => {
  const [showProjects, setShowProjects] = useState(true);
  const [selectedProject, setSelectedProject] = useState({});

  const selectProject = (event) => {
    const projectIndex = event.target.getAttribute('data-project-index');
    console.log(projectIndex);
    if (projectIndex) {
      setSelectedProject(projects[projectIndex]);
      viewHandler(projectIndex);
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
            <div key={project._id} className='dash-project-folder' onClick={selectProject}>
              <CgFolder className='onclick' size={100} data-project-index={i} />
              {project._id.slice(0, 8)}
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Dashboard;
