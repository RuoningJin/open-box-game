import { useState } from 'react';
import classNames from 'classnames';
import './BaitSelect.scss';

export default function BaitSelect(props) {
  const banana = './baits/banana.png';
  const apple = './baits/apple.png';
  const pineapple = './baits/pineapple.png';
  const [position, setPosition] = useState('');

  const left = classNames('bait', {
    'bait-selected': position === 'left',
  });
  const middle = classNames('bait', {
    'bait-selected': position === 'middle',
  });
  const right = classNames('bait', {
    'bait-selected': position === 'right',
  });

  const baitSelectHandler = (baitPosition, bait) => {
    setPosition(baitPosition);
    props.setBait(bait);
  }

  const baitConfirmHandler = () => {
    if (props.bait) {
      props.setChooseBait(false);
    }
  }

  return (
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
          src={banana}
          alt="bait" 
          onClick={() => baitSelectHandler('left', 'banana')}/>
        <img 
          className={middle} 
          src={apple}
          alt="bait" 
          onClick={() => baitSelectHandler('middle', 'apple')}/>
        <img 
          className={right}
          src={pineapple}
          alt="bait" 
          onClick={() => baitSelectHandler('right', 'pineapple')}/>
      </div>

      <div className='bait-select--button' onClick={baitConfirmHandler}>
        <div>
          <span className="red">G</span>
          <span className="blue">o</span>
          <span className="yellow">!</span>
        </div>
      </div>
    </div>
  )
}