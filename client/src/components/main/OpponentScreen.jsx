import { useState, useEffect } from 'react';
import './OpponentScreen.scss';

export default function OpponentScreen(props) {
  const [avatar, setAvatar] = useState('/opponent/girl.gif');
  useEffect (() => {
    if (props.finish) {
      setAvatar('/opponent/girl-2.gif')
    }
  }, [props.finish])

  return (
    <section className='opponent-screen'>
      <div className='opponent-screen--container'>
        <img className='opponent-screen--avatar' src={avatar} alt='opponent'/>
      </div>
    </section>
  )
}