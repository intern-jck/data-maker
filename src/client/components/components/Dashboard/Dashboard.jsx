import React, {useState, useEffect} from 'react';
import {CgFolder} from 'react-icons/cg';
import './Dashboard.css';

const Dashboard = ({projects, viewHandler}) => {
  console.log('DASHBOARD GOT:', projects);
  const [showProjects, setShowProjects] = useState(true);
  const [projectsList, setProjectsList] = useState(projects);
  const [selectedProject, setSelectedProject] = useState({});

  // useEffect(() => {
  //   const projectNames = [];
  //   projects.map((project, i) => {
  //     projectNames.push(project.name);
  //   });
  //   setProjectsList(projectNames);
  // }, []);

  const selectProject = (event) => {
    const projId = event.target.getAttribute('data-proj-id');
    if (projId) {
      // console.log(projId)
      setSelectedProject(projects[projId]);
      viewHandler(projId);
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
            <div key={i} className='dash-project-folder' onClick={selectProject}>
              <CgFolder className='onclick' size={100} data-proj-id={i}/>
              {project.name}
            </div>
          </div>
        ))
      }
      {/* {
        projectsList.map((name, i) => {
          return (
            <div key={i} className='dash-project-folder' onClick={selectProject}>
              <CgFolder className='onclick' size={100} data-proj-id={i}/>
              {name}
            </div>
          );
        })
      } */}

      {/* <div className='dash-header'>
        <button className='dash-show-btn' onClick={toggleProjects}>
          <RiArrowDropDownLine
            size={60}
            style={showProjects ?
            {transform: 'rotate(0deg)'} : {transform: 'rotate(90deg)'}} />
        </button>
      </div> */}

      {/* {
        showProjects ?
        <div className='dash-content'>
        </div> :
        null
      } */}

    </div>
  );
};

export default Dashboard;
