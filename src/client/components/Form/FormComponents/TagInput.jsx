import React from 'react';
import TextInput from './TextInput.jsx';
import {CgAddR} from 'react-icons/cg';

const TagInput = ({id, name, value, tags, changeHandler, tagHandler}) => {
  return (
    <div className='TagInput'>
      <div className='form-tag-input'>
        <TextInput
          id={id}
          name={name}
          value={value}
          changeHandler={changeHandler}
        />
        <div className='add-tag-btn onclick' onClick={tagHandler}>
          <CgAddR size={40}/>
        </div>
      </div>
      <div className='form-tag-list'>
        {
          tags.map((tag, i) => {
            return (
              <a href='' key={i}>{tag}</a>
            )
          })
        }
      </div>
    </div>
  );
};

export default TagInput;
