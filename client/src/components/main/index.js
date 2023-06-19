import { useState, useEffect } from 'react';
import classNames from 'classnames';
import './index.scss';

import FishingBackground from "./FishingBackground";
import OpponentScreen from './OpponentScreen';

export default function Game(props) {
  const [chooseBait, setChooseBait] = useState(true);

  const [bait, setBait] = useState('');

  const left = classNames('bait', {
    'bait-selected': bait === 'left',
  });
  const middle = classNames('bait', {
    'bait-selected': bait === 'middle',
  });
  const right = classNames('bait', {
    'bait-selected': bait === 'right',
  });

  const confirmBaitHandler = () => {
    setChooseBait(false);
  }

  return (
    <>
    {chooseBait &&
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
            src="./baits/banana.png" 
            alt="bait" 
            onClick={() => setBait('left')}/>
          <img 
            className={middle} 
            src="./baits/banana.png" 
            alt="bait" 
            onClick={() => setBait('middle')}/>
          <img 
            className={right}
            src="./baits/banana.png" 
            alt="bait" 
            onClick={() => setBait('right')}/>
        </div>

        <div className='bait-select--button' onClick={confirmBaitHandler}>
          <div>
            <span className="red">G</span>
            <span className="blue">o</span>
            <span className="yellow">!</span>
          </div>
        </div>
      </div>
    }
      

      <OpponentScreen />
      <FishingBackground />
    </>
  )
}