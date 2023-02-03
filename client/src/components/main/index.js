import { useEffect, useRef } from 'react';
import './index.scss';
import Box from "./Box";

export default function Trials() {
  const ref = useRef(null);

  // componentDidMount() {
  //   if (ref.current.requestFullscreen) {
  //     ref.current.requestFullscreen();
  //   }
  // }

  useEffect(() => {
    if (ref.current.requestFullscreen) {
      ref.current.requestFullscreen();
    }
  }, [])

  return (
    <main ref={ref} className='main-layout'>
      <div className='box-container'>
        <Box />
      </div>
    </main>
  )
}