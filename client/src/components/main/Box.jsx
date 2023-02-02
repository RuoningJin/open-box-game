import './Box.scss';
import closeBox from '../../img/close_box_red_square.png';

export default function Box() {

  return (
    <section>
      <img className='box' src={closeBox} alt='open box'/>
    </section>
  )
}