import './SessionBreak.scss';

export default function SessionBreak(props) {
  const handleUserClick = () => {
    props.setSessionBreak(false);
    props.setTrialId(props.trialId + 1);
    props.setChooseBait(true);
  }

  return (
    <>
      <div className='break-title'>
        <span className='break-title--text'>Let's Take a Break!</span>
        <button type="button" className='break-title--button' onClick={handleUserClick}>
          <span className="red">C</span>
          <span className="blue">o</span>
          <span className="yellow">n</span>
          <span className="green">t</span>
          <span className="green">i</span>
          <span className="yellow">n</span>
          <span className="blue">u</span>
          <span className="red">e</span>
        </button>
      </div>
    </>
  )
}