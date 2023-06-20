import './FinishScreen.scss';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

export default function FinishScreen(props) {

  const { width, height } = useWindowSize()

  return (
    <>
      <div className='confetti'>
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={2000}
        />
      </div>
    </>
  )
}