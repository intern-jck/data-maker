import React, {useState, useEffect} from 'react';

import TextInput from './FormComponents/TextInput.jsx';
import TextArea from './FormComponents/TextArea.jsx';
import DateInput from './FormComponents/DateInput.jsx';
import TagInput from './FormComponents/TagInput.jsx';
import PhotoInput from './FormComponents/PhotoInput.jsx';

import './Form.css';
import './FormComponents/FormComponents.css';

const Form = ({project, submitHandler, deleteHandler}) => {
  console.log('FORM GOT:', project.name)

  const [formData, setFormData] = useState(project);
  const [newDate, setNewDate] = useState({});
  const [newTech, setNewTech] = useState('');
  const [newPhoto, setNewPhoto] = useState('');
  // console.log(formData)

  useEffect(() => {
    console.log('SETTING PROJECT')
    setFormData(project);
  }, [project]);

  const submitForm = (event) => {
    event.preventDefault();
    submitHandler(formData);
    console.log(formData);
  };

  const deleteForm = (event) => {
    event.preventDefault();
    console.log('DELETE:', project._id)
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
    <div className='Form'>
      <label id='submit-form-label' htmlFor='submit-form-btn'>
        SAVE
      </label>
      <label id='delete-form-label'>
        DELETE
        <button id='delete-form-btn' onClick={deleteForm} />
      </label>

      {/* <h2>LINK: {formData.link}</h2> */}
      <form onSubmit={submitForm}>
        <button type='submit' id='submit-form-btn' />
        {/* Project Info */}
        <div className='form-section'>
          <TextInput
            id={'form-name'}
            name={'name'}
            value={formData.name ? formData.name : ''}
            changeHandler={inputChange}
          />
          <TextInput
            id={'form-client'}
            name={'client'}
            value={formData.client}
            changeHandler={inputChange}
          />
          <TextInput
            id={'form-client_url'}
            name={'client_url'}
            value={formData.client_url}
            changeHandler={inputChange}
          />
          <TextInput
            id={'form-short'}
            name={'short'}
            value={formData.short}
            changeHandler={inputChange}
          />
          <TextArea
            id={'form-info'}
            name={'info'}
            rows={8}
            cols={20}
            value={formData.info}
            changeHandler={inputChange}
          />
        </div>

        {/* Project Data */}
        {/* <div className='form-section'>
          <DateInput date={formData.date} dateHandler={getDate} />
          <TagInput
            id={'form-tech'}
            name={'tech'}
            value={newTech}
            tags={formData.tech}
            changeHandler={updateTag}
            tagHandler={addTag}
          />
          <PhotoInput
            id={'form-photo'}
            name={'photo'}
            value={newPhoto}
            photos={formData.photos}
            changeHandler={updatePhoto}
            photoHandler={addPhoto}
          />
        </div> */}

      </form>
    </div>
  );
};

export default Form;
