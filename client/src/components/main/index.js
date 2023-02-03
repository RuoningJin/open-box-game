import { useEffect } from 'react';
import './index.scss';
import Box from "./Box";

export default function Trials() {

  const elem = document.getElementById("fullScreen");

  useEffect(() => {

  }, [])
  const openFullScreen = () => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  }

  return (
    <main id='fullScreen' className='main-layout' onClick={openFullScreen}>
      <div className='box-container'>
        <Box />
      </div>
    </main>
  )
}