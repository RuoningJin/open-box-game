import React from 'react';
import './Button.scss';

export default function Button (props) {
  return (
    <button type="button" className={'confirm'} onClick={props.onClick}>
      <span>Start</span>
    </button>
  );
};