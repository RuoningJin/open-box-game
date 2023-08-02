import { useState } from 'react';
import './Starter.scss';
import useApplicationData from "../../hooks/useApplicationData";
import {orderAllTrials} from "../../helpers/trialHelper";

export default function Starter(props) {
  const [startButton, setStartButton] = useState(false);
  
  const {user, allTrials} = useApplicationData();

  setTimeout(() => {
    setStartButton(true);
  }, 2000);

  const startHandler = () => {
    const newTrials = orderAllTrials(allTrials)
    props.setUserId(user.id);
    props.setShuffledTrials(newTrials);
    props.setSession(newTrials[0].session);
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