import { useRef, useState, useEffect } from 'react';
import './Gender.scss';
import classNames from 'classnames';

export default function Gender(props) {

  const [gender, setGender] = useState('');

  const girlSelected = classNames('gender', {
    'girl-selected': gender === 'girl',
  });
  const boySelected = classNames('gender', {
    'boy-selected': gender === 'boy',
  })

  return (
    <section className='gender-selection'>
      <img src={'/girl.svg'} alt='girl' className={girlSelected} onClick={() => setGender('girl')}/>
      <img src={'/boy.svg'} alt='boy' className={boySelected} onClick={() => setGender('boy')}/>
    </section>      

  )
}