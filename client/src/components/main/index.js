import './index.scss';

import FishingBackground from "./FishingBackground";
import OpponentScreen from './OpponentScreen';

export default function Game(props) {

  return (
    <>
      <OpponentScreen />
      <FishingBackground />
    </>
  )
}