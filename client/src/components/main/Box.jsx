import { useState } from 'react';

import './Box.scss';
import closeRedSquareBox from '../../img/close_box_red_square.png';
import openRedSquareBox from '../../img/open_box_red_square.png';
import closeBlueTriangleBox from '../../img/close_box_blue_triangle.png';
import openBlueTriangleBox from '../../img/open_box_blue_triangle.png';

export default function Box() {
  const [box, setBox] = useState(closeRedSquareBox);
  const clickHandler = () => {
    setBox(openRedSquareBox)
    setTimeout(() => {
      setBox(closeBlueTriangleBox)
    }, 1500);
  }

  return (
    <section>
      <img className='box' src={box} alt='open box' onClick={clickHandler}/>
    </section>
  )
}