import { useState, useEffect } from 'react';

import './Box.scss';

export default function Box(props) {
  const [boxStatus, setBoxStatus] = useState('close');
  const [boxColor, setBoxColor] = useState(props.trial.color);
  const [boxShape, setBoxShape] = useState(props.trial.shape);
  const [reward, setReward] = useState(props.trial.rewards);
  const [disable, setDisable] = useState(false);

  const [box, setBox] = useState(`/box-img/${boxStatus}_box_${boxColor}_${boxShape}.png`);

  useEffect(() => {
    setBox(`/box-img/${boxStatus}_box_${boxColor}_${boxShape}.png`);
  }, [boxStatus, boxColor, boxShape]);

  const clickHandler = () => {
    setBoxStatus('open');
    setDisable(true);
    props.setTrialId(props.trialId + 1);
    if (props.trial.valence === 'positive') {
      new Audio('./valence-sound/positive.mp3').play();
    }
    if (props.trial.valence === 'negative') {
      new Audio('./valence-sound/negative.mp3').play();
    }
    if (props.trial.valence === 'neutral') {
      new Audio('./valence-sound/neutral.mp3').play();
    }

    setTimeout(() => {
      setDisable(false);
      setBoxStatus('close');
      setBoxColor(props.trial.color);
      setBoxShape(props.trial.shape);
      setReward(props.trial.rewards);
    }, 2500);
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
      {boxStatus === 'open' && reward === 'positive' &&
        <div className='rewards'>
          <img className='rewards-item' src={'/candy.png'} alt='reward'/>
          <img className='rewards-item' src={'/candy.png'} alt='reward'/>
          <img className='rewards-item' src={'/candy.png'} alt='reward'/>
        </div>
      }
      {boxStatus === 'open' && reward === 'negative' &&
        <div className='rewards'>
          <h1>-&nbsp;</h1>
          <img className='rewards-item' src={'/candy.png'} alt='reward'/>
          <img className='rewards-item' src={'/candy.png'} alt='reward'/>
          <img className='rewards-item' src={'/candy.png'} alt='reward'/>
        </div>
      }
      {props.trial !== 'end' &&
        <img disabled={disable} className='box' src={box} alt='box' onClick={clickHandler}/>
      }
      {props.trial !== 'end' &&
        <button className='skip-button' onClick={skipHandler}>Skip</button>
      }
      {props.trial === 'end' &&
        <h1>Thank you for participating!</h1>
      }
    </section>
  )
}