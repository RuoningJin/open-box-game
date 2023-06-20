import './FinishScreen.scss';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

export default function FinishScreen(props) {

  const { width, height } = useWindowSize();

  return (
    <section className='finish-screen'>
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={2000}
      />
      <img className='finish-screen--fish' src={'./fish/fish1.png'} alt='fish'/>
    </section>
  )
}