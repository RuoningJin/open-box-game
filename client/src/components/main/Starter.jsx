import { useState } from 'react';
import './Starter.scss';
import useApplicationData from "../../hooks/useApplicationData";
import {orderAllTrials} from "../../helpers/trialHelper";

export default function Starter(props) {
  const [startButton, setStartButton] = useState(false);
  
  const {user, allTrials} = useApplicationData();

  //testing data need to be changed to the above ones
  // const newTrials = [
  //   {bait_1_category: 2, bait_1_category_name: "car", bait_1_positive: "0.2", bait_1_reward: "0.2", bait_2_category: 4, bait_2_category_name: "ball", bait_2_positive: "0.2", bait_2_reward: "0.8", bait_3_category: 1, bait_3_category_name: "flower", bait_3_positive: "0.8", bait_3_reward: "0.8", session: 2, trial_id: 82},
  //   {bait_1_category: 2, bait_1_category_name: "car", bait_1_positive: "0.2", bait_1_reward: "0.2", bait_2_category: 4, bait_2_category_name: "ball", bait_2_positive: "0.2", bait_2_reward: "0.8", bait_3_category: 1, bait_3_category_name: "flower", bait_3_positive: "0.8", bait_3_reward: "0.8", session: 2, trial_id: 82}
  // ];

  setTimeout(() => {
    setStartButton(true);
  }, 2000);

  const startHandler = () => {
    const newTrials = orderAllTrials(allTrials);
    props.setUserId(user.id);
    props.setShuffledTrials(newTrials);
    props.setSession(newTrials[0].session);
    setStartButton(false);
    props.setStarter(false);
    props.setChooseBait(true);
    props.fullScreenHandler.enter();
    props.startTimeRef.current = Date.now();
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