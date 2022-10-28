import React from 'react';
import TextInput from './TextInput.jsx';
import {CgAddR} from 'react-icons/cg';

const PhotoInput = ({id, name, value, photos, changeHandler, photoHandler}) => {

  return (
    <div className='PhotoInput'>
      <div className='form-photo-input'>
        <TextInput
          id={id}
          name={name}
          value={value}
          changeHandler={changeHandler}
        />
        <div className='add-photo-btn onclick' onClick={photoHandler}>
          <CgAddR size={40}/>
        </div>
      </div>

      <div className='form-photo-list'>
        {
          photos.map((photo, i) => {
            return (
              <div key={i} className='form-photo-thumb'>
                <img src={photo}/>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default PhotoInput;
