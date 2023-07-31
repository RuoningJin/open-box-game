import { useState, useRef } from 'react';
import classNames from 'classnames';
import './BaitSelect.scss';
import {randomNum} from '../../helpers/trialHelper'
import {updateFeedback} from '../../helpers/feedbackHelper'

import { useEffect } from 'react';

export default function BaitSelect(props) {
  const [position, setPosition] = useState('');
  const [bait1, setBait1] = useState('');
  const [bait2, setBait2] = useState('');
  const [bait3, setBait3] = useState('');
  const currentFeedback = useRef({
    1: {positive: [0.8, 0.2], reward: [0.8, 0.2], count: 10}, 
    2: {positive: [0.2, 0.8], reward: [0.2, 0.8], count: 10}, 
    3: {positive: [0.8, 0.2], reward: [0.2, 0.8], count: 10}, 
    4: {positive: [0.2, 0.8], reward: [0.8, 0.2], count: 10}
  });

  const {bait_1_category, bait_2_category, bait_3_category} = props.baitsPool;  

  useEffect(() => {
    setBait1(randomNum(bait_1_category));
    setBait2(randomNum(bait_2_category));
    setBait3(randomNum(bait_3_category));
  }, [props.baitsPool]);

  const left = classNames('bait', {
    'bait-selected': position === 'left',
    'bait-negative': position && position !== 'left',
  });
  const middle = classNames('bait', {
    'bait-selected': position === 'middle',
    'bait-negative': position && position !== 'middle',
  });
  const right = classNames('bait', {
    'bait-selected': position === 'right',
    'bait-negative': position && position !== 'right',
  });

  const baitSelectHandler = (baitPosition, bait) => {
    setPosition(baitPosition);
    props.setBait(bait);
  }

  const baitConfirmHandler = () => {
    if (props.bait) {
      props.setChooseBait(false);
      console.log(props.userId);
      const {isPositive, hasReward, feedback} = updateFeedback(props.bait, currentFeedback);
      props.setIsPositive(isPositive);
      props.setHasReward(hasReward);
      currentFeedback.current = {...feedback};
    }
  }

  return (
    <div className='bait-select'>
      <div className='bait-select--title'>
        <span className="red">Cho</span>
        <span className="blue">ose</span>
        <span className="green"> Your</span>
        <span className="yellow"> Bait</span>
      </div>

      <div className='bait-select--baits'>
        <img 
          className={left} 
          src={`./baits/${bait1}.png`}
          alt="bait" 
          onClick={() => baitSelectHandler('left', bait1)}/>
        <img 
          className={middle} 
          src={`./baits/${bait2}.png`}
          alt="bait" 
          onClick={() => baitSelectHandler('middle', bait2)}/>
        <img 
          className={right}
          src={`./baits/${bait3}.png`}
          alt="bait" 
          onClick={() => baitSelectHandler('right', bait3)}/>
      </div>

      <div className='bait-select--button' onClick={baitConfirmHandler}>
        <div>
          <span className="red">G</span>
          <span className="blue">o</span>
          <span className="yellow">!</span>
        </div>
      </div>
    </div>
  )
}