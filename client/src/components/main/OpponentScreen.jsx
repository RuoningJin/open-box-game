import { useState, useEffect } from 'react';
import './OpponentScreen.scss';

export default function OpponentScreen(props) {
  const [avatar, setAvatar] = useState('/opponent/girl-starter.gif');
  useEffect(() => {
    if (!props.starter) {
      setAvatar('/opponent/girl-2.gif')
      setTimeout(() => {
        setAvatar('/opponent/girl.gif')
      }, 4000);
    }
    
  }, [props.starter])

  return (
    <section className='opponent-screen'>
      <div className='opponent-screen--container'>
        <img className='opponent-screen--avatar' src={avatar} alt='opponent'/>
      </div>
    </section>
  )
}