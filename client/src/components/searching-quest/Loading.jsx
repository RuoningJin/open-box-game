import './Loading.scss';

export default function Loading(props) {

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
      <div id='cross-fading' className='searching-loading'>
        <img src='/loading-fish/loading-yellow.png'alt='loading-yellow' className='searching-fish'/>
        <img src='/loading-fish/loading-green.png'alt='loading-green' className='searching-fish'/>
        <img src='/loading-fish/loading-blue.png'alt='loading-blue' className='searching-fish'/>
        <img src='/loading-fish/loading-red.png'alt='loading-red' className='searching-fish'/>
      </div>

    </main>
  )
}