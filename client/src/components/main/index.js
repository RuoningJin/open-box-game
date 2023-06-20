import { useState } from 'react';
import './index.scss';

import FishingBackground from "./FishingBackground";
import OpponentScreen from './OpponentScreen';
import BaitScreen from './BaitScreen';
import BaitSelect from './BaitSelect';
import FinishScreen from './FinishScreen';


export default function Game(props) {
  const [chooseBait, setChooseBait] = useState(true);

  const [bait, setBait] = useState('');
  const [finish, setFinish] = useState(false)

  if (!chooseBait) {
    setTimeout(() => {
      setFinish(true);
    }, 5000);
  }

  return (
    <>
      {chooseBait && 
        <BaitSelect 
          bait={bait} 
          setBait={setBait} 
          setChooseBait={setChooseBait}
        />
      }

      {finish && <FinishScreen />}
      
       
      {!chooseBait && 
        <div>
          <OpponentScreen />
          <BaitScreen bait={bait}/>
        </div>
      }

      <FishingBackground />
    </>
  )
}