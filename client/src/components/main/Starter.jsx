import { useState } from 'react';
import './Starter.scss';

export default function Starter(props) {
  const [startButton, setStartButton] = useState(false);

  setTimeout(() => {
    setStartButton(true);
  }, 2000);

  const startHandler = () => {
    setStartButton(false);
    props.setStarter(false);
    props.setChooseBait(true);
    props.fullScreenHandler.enter();
  }

  return (
    <div className='start'>
      {startButton && 
        <span 
          className='start-button' 
          onClick={startHandler}>
          Let's Fish!
        </span>
      }
    </div> 
  )
}