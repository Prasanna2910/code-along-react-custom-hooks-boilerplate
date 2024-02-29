import React from 'react';

function Usestorage(value) {
  let valueFromProps = value;
  window.localStorage.setItem('context', valueFromProps);
  window.sessionStorage.setItem('context', valueFromProps);
  return null;
}

export default Usestorage;
