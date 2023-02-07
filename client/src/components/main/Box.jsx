import { useState, useEffect } from 'react';

import './Box.scss';

export default function Box(props) {
  const [boxStatus, setBoxStatus] = useState('close');
  const [boxColor, setBoxColor] = useState('red');
  const [boxShape, setBoxShape] = useState('square');

  const [box, setBox] = useState(`/box-img/${boxStatus}_box_${boxColor}_${boxShape}.png`);

  useEffect(() => {
    setBox(`/box-img/${boxStatus}_box_${boxColor}_${boxShape}.png`);
  }, [boxStatus, boxColor, boxShape]);

  const clickHandler = () => {
    setBoxStatus('open')

    setTimeout(() => {
      setBoxStatus('close');
      setBoxColor('blue');
      setBoxShape('triangle');
    }, 1500);
  }

  const skipHandler = () => {
    setBoxStatus('close');
    setBoxColor('blue');
    setBoxShape('triangle');
  }

  return (
    <section className='trial-select'>
      <img className='box' src={box} alt='box' onClick={clickHandler}/>
      <button className='skip-button' onClick={skipHandler}>Skip</button>
    </section>
  )
}