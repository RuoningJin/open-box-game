import React from 'react';
import './Button.scss';

export default function Button (props) {
  return (
    <button type="button" className={'confirm'} onClick={props.onClick}>
      <span className="red">S</span>
      <span className="blue">t</span>
      <span className="yellow">a</span>
      <span className="green">r</span>
      <span className="red">t</span>
    </button>
  );
};