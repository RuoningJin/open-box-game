import React from 'react';
import './Button.scss';

export default function Button (props) {
  return (
    <button type="button" className={'confirm'} onClick={props.onClick}>
      <span>Start</span>
      <span className="red">F</span>
      <span className="blue">i</span>
      <span className="green">s</span>
      <span className="yellow">h</span>
      <span className="green">i</span>
      <span className="blue">n</span>
      <span className="red">g</span>

    </button>
  );
};