import { useState, useEffect } from 'react';

import './Box.scss';

export default function Box(props) {
  const [boxStatus, setBoxStatus] = useState('close');
  const [boxColor, setBoxColor] = useState(props.trial.color);
  const [boxShape, setBoxShape] = useState(props.trial.shape);
  const [reward, setReward] = useState(props.trial.rewards);

  const [box, setBox] = useState(`/box-img/${boxStatus}_box_${boxColor}_${boxShape}.png`);

  useEffect(() => {
    setBox(`/box-img/${boxStatus}_box_${boxColor}_${boxShape}.png`);
  }, [boxStatus, boxColor, boxShape]);

  const clickHandler = () => {
    setBoxStatus('open')
    props.setTrialId(props.trialId + 1);

      setTimeout(() => {
        setBoxStatus('close');
        setBoxColor(props.trial.color);
        setBoxShape(props.trial.shape);
        setReward(props.trial.rewards);
      }, 1500);
  }

  const skipHandler = () => {
    props.setTrialId(props.trialId + 1);

    setBoxStatus('close');
    setBoxColor(props.trial.color);
    setBoxShape(props.trial.shape);
    setReward(props.trial.rewards);

  }

  return (
    <section className='trial-select'>
      {boxStatus === 'open' && reward &&
        <div className='rewards'>
          <img className='rewards-item' src={'/candy.png'} alt='reward'/>
          <img className='rewards-item' src={'/candy.png'} alt='reward'/>
          <img className='rewards-item' src={'/candy.png'} alt='reward'/>
        </div>
      }
      <img className='box' src={box} alt='box' onClick={clickHandler}/>
      <button className='skip-button' onClick={skipHandler}>Skip</button>
    </section>
  )
}