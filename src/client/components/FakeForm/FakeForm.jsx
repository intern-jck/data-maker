import React, {useState, useEffect} from 'react';
import {faker} from '@faker-js/faker';
import FakeName from './FakeFormComponents/FakeName.jsx';
import './FakeForm.css';
import './FakeFormComponents/FakeFormComponents.css';

const FakeForm = ({project, submitHandler, deleteHandler}) => {
  const [formData, setFormData] = useState(project);

  useEffect(() => {
    setFormData(project);
  }, [project]);

  const submitForm = (event) => {
    event.preventDefault();
    submitHandler(formData);
    console.log(formData);
  };

  const deleteForm = (event) => {
    event.preventDefault();
    deleteHandler(project._id);
  }

  const inputChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    const updatedInput = {[name]: value};
    setFormData((formData) => ({
      ...formData,
      ...updatedInput,
    }));
  };

  const updateTag = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    setNewTech(value);
  };

  const addTag = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    const {tech} = formData;
    if (newTech) {
      tech.push(newTech);
      setNewTech('');
      setFormData((formData) => ({
        ...formData,
        tech: tech,
      }))
    }
  };

  const updatePhoto = () => {
    event.preventDefault();
    const {name, value} = event.target;
    console.log(name, value)
    setNewPhoto(value);
  };

  const addPhoto = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    const {photos} = formData;
    if (newPhoto) {
      photos.push(newPhoto);
      setNewPhoto('');
      setFormData((formData) => ({
        ...formData,
        photos: photos,
      }))
    }
  };

  const getDate = (date) => {
    console.log('form', date);
    // TODO format date to create a single string?
    setFormData((formData) => ({
      ...formData,
      date: date,
    }));
  };

  {/* Delete */}
  return (
    <div className='FakeForm'>

      <label id='submit-form-label' htmlFor='submit-form-btn'>
        SAVE
      </label>
      <label id='delete-form-label'>
        DELETE
        <button id='delete-form-btn' onClick={deleteForm} />
      </label>

      <h2>_id: {formData._id}</h2>
      <form onSubmit={submitForm}>
        <button type='submit' id='submit-form-btn' />
        <div className='form-section'>
          <FakeName generator={faker.name.fullName}/>
        </div>
      </form>

    </div>
  );
};

export default FakeForm;
