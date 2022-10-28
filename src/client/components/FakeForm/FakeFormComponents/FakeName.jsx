import React from 'react';

const FakeName = ({generator}) => {
  const fakeName = generator();
  return (
    <div className='FakeName'>
      <span>NAME: {fakeName}</span>
    </div>
  );
};

export default FakeName;
