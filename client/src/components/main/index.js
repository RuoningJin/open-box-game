import { useState } from 'react';
import './index.scss';

import FishingBackground from "./FishingBackground";
import OpponentScreen from './OpponentScreen';

export default function Game(props) {
  const [chooseBait, setChooseBait] = useState(true);

  const [bait, setBait] = useState('');

  // const left = classNames('gender', {
  //   'girl-selected': gender === 'girl',
  // });
  // const middle = classNames('gender', {
  //   'boy-selected': gender === 'boy',
  // });

  const chooseBaitHandler = () => {
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
          <img className='left' src="./baits/banana.png" alt="bait"/>
          <img className='middle' src="./baits/banana.png" alt="bait"/>
          <img className='right' src="./baits/banana.png" alt="bait"/>
        </div>

        <div className='bait-select--button' onClick={chooseBaitHandler}>
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