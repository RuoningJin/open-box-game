import classNames from 'classnames';
import './BaitSelect.scss';

export default function BaitSelect(props) {

  const left = classNames('bait', {
    'bait-selected': props.bait === 'left',
  });
  const middle = classNames('bait', {
    'bait-selected': props.bait === 'middle',
  });
  const right = classNames('bait', {
    'bait-selected': props.bait === 'right',
  });

  const baitSelectHandler = (baitPosition) => {
    props.setBait(baitPosition);
  }

  const baitConfirmHandler = () => {
    props.setChooseBait(false);
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
          src="./baits/banana.png" 
          alt="bait" 
          onClick={() => baitSelectHandler('left')}/>
        <img 
          className={middle} 
          src="./baits/banana.png" 
          alt="bait" 
          onClick={() => baitSelectHandler('middle')}/>
        <img 
          className={right}
          src="./baits/banana.png" 
          alt="bait" 
          onClick={() => baitSelectHandler('right')}/>
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