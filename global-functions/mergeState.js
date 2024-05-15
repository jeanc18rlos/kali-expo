import React from 'react';

const mergeState = (base, key, value) => {
  return {
    ...base,
    [key]: value,
  };
};

export default mergeState;
