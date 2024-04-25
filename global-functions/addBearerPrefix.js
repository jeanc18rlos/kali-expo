import React from 'react';

const addBearerPrefix = token => {
  return 'Bearer ' + token;
};

export default addBearerPrefix;
