import { useState } from 'react';
import './Gender.scss';
import classNames from 'classnames';
import GenderItem from './GenderItem';

export default function Gender(props) {

  const [gender, setGender] = useState('');

  const girlSelected = classNames('gender', {
    'girl-selected': gender === 'girl',
  });
  const boySelected = classNames('gender', {
    'boy-selected': gender === 'boy',
  });

  return (
    <section className='gender-selection'>
      <GenderItem 
        gender={gender}
        name='girl'
        setGender={setGender}
        className={girlSelected}
        color='#F25558'
      />
      <GenderItem 
        gender={gender} 
        name='boy'
        setGender={setGender}
        className={boySelected}
        color='#A3CBCE'
      />
    </section>      

  )
}