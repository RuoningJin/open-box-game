import { useState } from 'react';

import './Box.scss';
import closeBox from '../../img/close_box_red_square.png';
import openBox from '../../img/open_box_red_square.png';

export default function Box() {
  const [box, setBox] = useState(closeBox);
  const clickHandler = () => {setBox(openBox)}

  return (
    <section>
      <img className='box' src={box} alt='open box' onClick={clickHandler}/>
    </section>
  )
}