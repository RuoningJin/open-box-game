import { useState } from 'react';
import './Gender.scss';
import classNames from 'classnames';
import GenderItem from './GenderItem';

export default function Gender(props) {

  const girlSelected = classNames('gender', {
    'girl-selected': props.gender === 'girl',
  });
  const boySelected = classNames('gender', {
    'boy-selected': props.gender === 'boy',
  });

  return (
    <section className='gender-selection'>
      <GenderItem 
        gender={props.gender}
        name='girl'
        setGender={props.setGender}
        className={girlSelected}
        color='#F25558'
      />
      <GenderItem 
        gender={props.gender} 
        name='boy'
        setGender={props.setGender}
        className={boySelected}
        color='#A3CBCE'
      />
    </section>      

  )
}