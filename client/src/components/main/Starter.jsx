import { useState } from 'react';
import './Starter.scss';
import useApplicationData from "../../hooks/useApplicationData";
import {orderAllTrials} from "../../helpers/trialHelper";

export default function Starter(props) {
  const [startButton, setStartButton] = useState(false);
  const allTrials = useApplicationData();
  console.log(allTrials);

  setTimeout(() => {
    setStartButton(true);
  }, 2000);

  const startHandler = () => {
    props.setShuffledTrials(orderAllTrials(allTrials));
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