import React from 'react';

const TextInput = ({id, name, value, changeHandler}) => {
  return (
    <label htmlFor={id} className='TextInput'>
      {name}
      <input
        id={id}
        // className='onclick'
        type='text'
        name={name}
        value={value}
        onChange={changeHandler}
      />
    </label>
  );
};

export default TextInput;
