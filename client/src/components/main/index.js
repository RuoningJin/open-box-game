import { useState } from 'react';
import './index.scss';

import FishingBackground from "./FishingBackground";
import OpponentScreen from './OpponentScreen';
import BaitScreen from './BaitScreen';
import BaitSelect from './BaitSelect';

export default function Game(props) {
  const [chooseBait, setChooseBait] = useState(true);

  const [bait, setBait] = useState('');

  return (
    <>
      {chooseBait && 
        <BaitSelect 
          bait={bait} 
          setBait={setBait} 
          setChooseBait={setChooseBait}
        />
      }
      
      <div>
        <OpponentScreen />
        <BaitScreen />
      </div>
      
      <FishingBackground />
    </>
  )
}