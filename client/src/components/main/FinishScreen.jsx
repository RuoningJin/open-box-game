import './FinishScreen.scss';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

export default function FinishScreen(props) {

  const { width, height } = useWindowSize();

  return (
    <>
      <div className='finish-title'>
        {props.reward && <span className='finish-title--text'>We Got A Fish!</span>}
        {!props.reward && <span className='finish-title--text'>We Got Nothing.</span>}

      </div>
      {props.reward &&
        <section className='finish-screen'>
          <Confetti
            width={width}
            height={height}
            recycle={true}
            numberOfPieces={200}
          />
          <img className='finish-screen--fish' src={'./fish/fish1.png'} alt='fish'/>
        </section>
      } 
    </>
  )
}