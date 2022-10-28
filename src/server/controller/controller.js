const mongoose = require('mongoose');
const Project = require('../model/model.js');
require('dotenv').config()

const MONGODB = process.env.MONGODB;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_ENDPOINT = process.env.DB_ENDPOINT;

const uri = `${MONGODB}://${DB_USERNAME}:${DB_PASSWORD}@${DB_ENDPOINT}`;

mongoose.connect(uri)
  .then((data) => (console.log('mongo success!')))
  .catch((error) => (console.log(error)));

// Create a document
const createProject = (projectData) => {
    return Project.create(projectData);
  };

// Read all documents
// Make queries promises with exec()
const getProjects = () => {
  return Project.find().exec();
};

// Update a document
const updateProject = (projectData) => {

  // Format the link to be based on the name.
  // EX:  name: 'Project Name', link: 'project-name'
  const linkLowerCase = projectData.name.toLowerCase().split(' ').join('-');

  const filter = { '_id': projectData._id };

  const update = {
    name: projectData.name,
    link: `${linkLowerCase}`,
    client: projectData.client,
    client_url: projectData.client_url,
    date: projectData.date,
    short: projectData.short,
    info: projectData.info,
    tech: projectData.tech,
    photos: projectData.photos,
  };

  const options = { 'upsert': false };

  return Project.findOneAndUpdate(filter, update, options).exec();
}

// Delete a document
const deleteProject = (id) => {
  return Project.deleteOne({_id: id}).exec();
};

module.exports = {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
};
