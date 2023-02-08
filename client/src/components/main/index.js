import { useRef, useState, useEffect } from 'react';
import './index.scss';
import '../Button.scss';
import axios from 'axios';

import Box from "./Box";

export default function Trials(props) {
  const ref = useRef(null);
  const [fullScreen, setFullScreen] = useState(false);
  const [trialId, setTrialId] = useState(1);
  const [trial, setTrial] = useState({});
  

  const openFullScreen = () => {
    ref.current.requestFullscreen();
    setFullScreen(true);
  }

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:8080/api/',
    })
      .then((res) => {
        if (res.data[trialId]) {
          setTrial(res.data[trialId]);
        }
        if (res.data[trialId] === undefined) {
          setTrial('end');
        }
      });
  }, [trialId])

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
          <Box trial={trial} trialId={trialId} setTrialId={setTrialId}/>
        </div>
      }
    </main>
  )
}