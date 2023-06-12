import './index.scss';

import FishingBackground from "./FishingBackground";
import OpponentScreen from './OpponentScreen';

export default function Game(props) {

  return (
    <>
      <div className='bait-select'>
        <div className='bait-select--title'>
          <span className="red">Cho</span>
          <span className="blue">ose</span>
          <span className="green"> Your</span>
          <span className="yellow"> Bait</span>
        </div>

        <div className='bait-select--baits'>
          <img src="./baits/banana.png" alt="bait"/>
          <img src="./baits/banana.png" alt="bait"/>
          <img src="./baits/banana.png" alt="bait"/>
        </div>
      </div>

      <OpponentScreen />
      <FishingBackground />
    </>
  )
}