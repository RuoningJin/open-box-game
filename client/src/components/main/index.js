import { useState, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import './index.scss';

import FishingBackground from "./FishingBackground";
import OpponentScreen from './OpponentScreen';
import BaitScreen from './BaitScreen';
import BaitSelect from './BaitSelect';
import FinishScreen from './FinishScreen';
import Starter from './Starter';
import SessionBreak from './SessionBreak';


export default function Game(props) {
  const [starter, setStarter] = useState(true);
  const [chooseBait, setChooseBait] = useState(false);
  const [bait, setBait] = useState('');
  const [finish, setFinish] = useState(false);
  const [trialId, setTrialId] = useState(1);
  const [session, setSession] = useState(1);
  const [sessionBreak, setSessionBreak] = useState(false);

  //hard coded trials, will be replaced by real sqldata
  const trials = {
    1: {
      id: 1,
      baits: ['apple', 'car2', 'flower1'],
      emotionalFeedback: 'positive',
      reward: true,
      session: 1
    },
    2: {
      id: 2,
      baits: ['pineapple', 'flower3', 'car3'],
      emotionalFeedback: 'negative',
      reward: false,
      session: 1
    },
    3: {
      id: 3,
      baits: ['car1', 'flower2', 'pineapple'],
      emotionalFeedback: 'neutral',
      reward: true,
      session: 1
    },
    4: {
      id: 4,
      baits: ['apple', 'car2', 'flower1'],
      emotionalFeedback: 'positive',
      reward: true,
      session: 2
    },
    5: {
      id: 5,
      baits: ['pineapple', 'flower3', 'car3'],
      emotionalFeedback: 'negative',
      reward: false,
      session: 2
    },
    6: {
      id: 6,
      baits: ['car1', 'flower2', 'pineapple'],
      emotionalFeedback: 'neutral',
      reward: true,
      session: 2
    }
  }

  useEffect(() => {
    if (!chooseBait && !starter && !sessionBreak) {
      if (session === 1) {
        setTimeout(() => {
          setFinish(true);
        }, 5000);
      };
      if (session === 2) {
        setFinish(true);
        setTimeout(() => {
          setFinish(false);
        }, 3000);
      };
      if (trials[trialId + 1] && trials[trialId].session !== trials[trialId + 1].session) {
        setTimeout(() => {
          setFinish(false);
          setSessionBreak(true);
          setSession(trials[trialId + 1].session)
          setBait('');
        }, 8000);
      } else if (trials[trialId + 1]) {
        setTimeout(() => {
          setFinish(false);
          setTrialId(trialId + 1);
          setBait('');
          setChooseBait(true);
        }, 8000);
      }
    };
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
        {sessionBreak && 
          <SessionBreak 
            setSessionBreak={setSessionBreak}
            setChooseBait={setChooseBait}
            trialId={trialId}
            setTrialId={setTrialId}
          />
        }
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
        
        {!chooseBait && !finish &&
          <div>
            <OpponentScreen starter={starter}/>
            {!starter && <BaitScreen bait={bait}/>}
          </div>
        }

        <FishingBackground session={session}/>
      </FullScreen>
    </>
  )
}