import { useState } from 'react';
import classNames from 'classnames';
import './BaitSelect.scss';

export default function BaitSelect(props) {
  const [position, setPosition] = useState('');
  const [bait1, bait2, bait3] = props.baitsPool;

  const left = classNames('bait', {
    'bait-selected': position === 'left',
    'bait-negative': position && position !== 'left',
  });
  const middle = classNames('bait', {
    'bait-selected': position === 'middle',
    'bait-negative': position && position !== 'middle',
  });
  const right = classNames('bait', {
    'bait-selected': position === 'right',
    'bait-negative': position && position !== 'right',
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
          src={`./baits/${bait1}.png`}
          alt="bait" 
          onClick={() => baitSelectHandler('left', bait1)}/>
        <img 
          className={middle} 
          src={`./baits/${bait2}.png`}
          alt="bait" 
          onClick={() => baitSelectHandler('middle', bait2)}/>
        <img 
          className={right}
          src={`./baits/${bait3}.png`}
          alt="bait" 
          onClick={() => baitSelectHandler('right', bait3)}/>
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