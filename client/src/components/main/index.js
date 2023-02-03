import { useEffect, useRef, useState } from 'react';
import './index.scss';
import '../Button.scss';

import Box from "./Box";

export default function Trials() {
  const ref = useRef(null);
  const [fullScreen, setFullScreen] = useState(false);

  const openFullScreen = () => {
    ref.current.requestFullscreen();
    setFullScreen(true);
  }

  return (
    <main ref={ref} className='main-layout'>
      {fullScreen === false && 
      <button onClick={openFullScreen} className='play-button'>      
        <span className="red">L</span>
        <span className="blue">e</span>
        <span className="yellow">t'</span>
        <span className="green">s </span>
        <span className="red">P</span>
        <span className="blue">l</span>
        <span className="yellow">a</span>
        <span className="green">y!</span>
      </button>}
      {fullScreen === true &&
        <div className='box-container'>
        <Box />
      </div>
      }
    </main>
  )
}