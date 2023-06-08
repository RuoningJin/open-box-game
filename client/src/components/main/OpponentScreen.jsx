import './OpponentScreen.scss';

export default function OpponentScreen(props) {

  return (
    <section className='opponent-screen'>
      <div className='opponent-screen--container'>
        <img className='opponent-screen--avatar' src={'/girl.gif'} alt='opponent'/>
      </div>
    </section>
  )
}