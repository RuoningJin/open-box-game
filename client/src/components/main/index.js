import { useState } from 'react';
import './index.scss';

import FishingBackground from "./FishingBackground";
import OpponentScreen from './OpponentScreen';
import BaitScreen from './BaitScreen';
import BaitSelect from './BaitSelect';
import FinishScreen from './FinishScreen';


export default function Game(props) {
  const [chooseBait, setChooseBait] = useState(true);

  const [bait, setBait] = useState('');
  const [finish, setFinish] = useState(false)
  const [trialId, setTrialId] = useState(1);

  //hard coded trials, will be replaced by real sqldata
  const trials = {
    1: {
      id: 1,
      baits: ['apple', 'banana', 'pineapple'],
      emotionalFeedback: 'positive',
      reward: true
    },
    2: {
      id: 2,
      baits: ['pineapple', 'banana', 'apple'],
      emotionalFeedback: 'negative',
      reward: false
    },
    3: {
      id: 3,
      baits: ['banana', 'apple', 'pineapple'],
      emotionalFeedback: 'neutral',
      reward: true
    },
  }

  if (!chooseBait) {
    setTimeout(() => {
      setFinish(true);
    }, 5000);
  }

  return (
    <>
      {chooseBait && 
        <BaitSelect 
          bait={bait} 
          baitsPool={trials[trialId].baits}
          setBait={setBait} 
          setChooseBait={setChooseBait}
        />
      }

      {finish && 
        <FinishScreen 
          reward={trials[trialId].reward}
        />
      }
      
       
      {!chooseBait && 
        <div>
          <OpponentScreen />
          <BaitScreen bait={bait}/>
        </div>
      }

      <FishingBackground />
    </>
  )
}