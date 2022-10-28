import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Form from './components/Form/Form.jsx';
import './App.css';

const SERVER_URL = 'http://127.0.0.1:3000';

const App = () => {
  const [projects, setProjects] = useState();
  const [currentProject, setCurrentProject] = useState();

  useEffect(() => {
    getProjects();
  }, []);

  // CREATE
  const createProject = () => {
    // Create random project name as default

    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let randomName = '';
    for (let i = 0; i < 6; i++) {
      randomName += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    const data = {'name': `project-${randomName}`};

    axios.post(`${SERVER_URL}/create`, data)
      .then((response) => {
        console.log('create project', response.data);
        getProjects();
      })
      .catch((error) => ('Create Error', console.log(error)));
  };

  // READ
  const getProjects = ()  => {
    axios.get(`${SERVER_URL}/projects`)
      .then((response) => {
        console.log('CLIENT GOT: ', response.data)
        setProjects(response.data);
      })
      .catch((error) => (console.log('getProjects error: ', error)));
  };

  // UPDATE
  const updateProject = (data) => {
    axios.put(`${SERVER_URL}/project`, data)
      .then((response) => {
        console.log('update project', response.data)
        getProjects();
      })
      .catch((error) => (console.log(error)));
  };

  // DELETE
  const deleteProject = (id) => {
    axios.delete(`${SERVER_URL}/project?id=${id}`)
    .then((response) => {
      console.log('delete project', response.data)
      getProjects();
      setCurrentProject();
    })
    .catch((error) => (console.log(error)));
  };

  // Render the selected project data
  const viewProject = (projId) => {
    console.log('VIEW HANDLER: ', projId);
    projId ?
      setCurrentProject(projects[projId]) :
      setCurrentProject({});
  };

  return (
    <>
      <Navbar createHandler={createProject} deleteHandler={deleteProject} />
      {
        projects ?
        <Dashboard projects={projects} viewHandler={viewProject} /> :
        null
      }
      {
        currentProject ?
        <Form
          project={currentProject}
          submitHandler={updateProject}
          deleteHandler={deleteProject}
        /> :
        null
      }
    </>
  );
};

export default App;
