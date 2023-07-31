import { useState, useEffect, useRef } from 'react';
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
  const [userId, setUserId] = useState();
  const [chooseBait, setChooseBait] = useState(false);
  const [bait, setBait] = useState('');
  const [finish, setFinish] = useState(false);
  const [trialId, setTrialId] = useState(1);
  const [session, setSession] = useState(1);
  const [sessionBreak, setSessionBreak] = useState(false);
  const [shuffledTrials, setShuffledTrials] = useState();
  const [currentTrial, setCurrentTrial] = useState();
  const [isPositive, setIsPositive] = useState();
  const [hasReward, setHasReward] = useState();
  
  const feedbackRef = useRef({
    1: {positive: [8, 2], reward: [8, 2], count: 10}, 
    2: {positive: [2, 8], reward: [2, 8], count: 10}, 
    3: {positive: [8, 2], reward: [2, 8], count: 10}, 
    4: {positive: [2, 8], reward: [8, 2], count: 10}
  });

  const updateFeedbackRef = (updatedFeedback) => {
    feedbackRef.current = updatedFeedback;
  }; 

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
      if (shuffledTrials[trialId + 1] && shuffledTrials[trialId].session !== shuffledTrials[trialId + 1].session) {
        setTimeout(() => {
          setFinish(false);
          setSessionBreak(true);
          setSession(shuffledTrials[trialId + 1].session)
          setBait('');
        }, 8000);
      } else if (shuffledTrials[trialId + 1]) {
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
          setUserId={setUserId}
          setChooseBait={setChooseBait} 
          fullScreenHandler={fullScreenHandler}
          setShuffledTrials={setShuffledTrials}
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
            userId={userId}
            bait={bait} 
            baitsPool={shuffledTrials[trialId]}
            setBait={setBait} 
            setChooseBait={setChooseBait}
            setIsPositive={setIsPositive}
            setHasReward={setHasReward}
            feedbackRef={feedbackRef}
            updateFeedbackRef={updateFeedbackRef}
          />
        }

        {finish && 
          <FinishScreen 
            hasReward={hasReward}
            isPositive={isPositive}
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