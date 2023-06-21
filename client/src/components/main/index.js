import { useState, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import './index.scss';

import FishingBackground from "./FishingBackground";
import OpponentScreen from './OpponentScreen';
import BaitScreen from './BaitScreen';
import BaitSelect from './BaitSelect';
import FinishScreen from './FinishScreen';
import Starter from './Starter';


export default function Game(props) {
  const [starter, setStarter] = useState(true);
  const [chooseBait, setChooseBait] = useState(false);
  const [bait, setBait] = useState('');
  const [finish, setFinish] = useState(false)
  const [trialId, setTrialId] = useState(1);

  //hard coded trials, will be replaced by real sqldata
  const trials = {
    1: {
      id: 1,
      baits: ['apple', 'car2', 'flower1'],
      emotionalFeedback: 'positive',
      reward: true
    },
    2: {
      id: 2,
      baits: ['pineapple', 'flower3', 'car3'],
      emotionalFeedback: 'negative',
      reward: false
    },
    3: {
      id: 3,
      baits: ['car1', 'flower2', 'pineapple'],
      emotionalFeedback: 'neutral',
      reward: true
    },
  }

  useEffect(() => {
    if (!chooseBait && !starter) {
      setTimeout(() => {
        setFinish(true);
      }, 5000);
      if (trials[trialId + 1]) {
        setTimeout(() => {
          setFinish(false);
          setTrialId(trialId + 1);
          setChooseBait(true);
        }, 8000);
      }
    }
  }, [chooseBait]);

  const fullScreenHandler = useFullScreenHandle();
  
  return (
    <>
      {starter && 
        <Starter 
          setStarter={setStarter} 
          setChooseBait={setChooseBait} 
          fullScreenHandler={fullScreenHandler}
        />
      }
      <FullScreen handle={fullScreenHandler}>
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
            trialId={trialId}
            setTrialId={setTrialId}
            finish={finish}
            setFinish={setFinish}
          />
        }
        
        
        {!chooseBait && 
          <div>
            <OpponentScreen starter={starter}/>
            {!starter && <BaitScreen bait={bait}/>}
          </div>
        }

        <FishingBackground />
      </FullScreen>
    </>
  )
}