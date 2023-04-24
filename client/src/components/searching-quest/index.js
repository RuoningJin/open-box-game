import { useState, useEffect } from 'react';
import './index.scss';
import '../Button.scss';

export default function Searching(props) {
  const [loadingFish, setLoadingFish] = useState();

  useEffect(() => {

    setTimeout(() => {
      setLoadingFish(`/loading-fish/loading-red.png`);
    }, 1500);
  
    setTimeout(() => {
      setLoadingFish(`/loading-fish/loading-blue.png`);
    }, 3000);
  
    setTimeout(() => {
      setLoadingFish(`/loading-fish/loading-green.png`);
    }, 4500);
  
    setTimeout(() => {
      setLoadingFish(`/loading-fish/loading-yellow.png`);
    }, 6000);

  }, []);

  return (
    <main className='searching'>

      <div className='searching-text'>      
        <span className="red">S</span>
        <span className="blue">e</span>
        <span className="green">a</span>
        <span className="yellow">r</span>
        <span className="green">c</span>
        <span className="blue">h</span>
        <span className="red">i</span>
        <span className="blue">n</span>
        <span className="green">g </span>

        <span className="red">F</span>
        <span className="blue">o</span>
        <span className="green">r </span>

        <span className="red">Q</span>
        <span className="blue">u</span>
        <span className="green">e</span>
        <span className="yellow">s</span>
        <span className="green">t</span>
        <span className="green">s</span>
      </div>
      <div className='searching-fish'>
        <img src={loadingFish} alt='loading-fish'/>
      </div>

    </main>
  )
}