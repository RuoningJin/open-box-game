import './BaitScreen.scss';

export default function BaitScreen(props) {

  return (
    <section className='bait-screen'>
      <div className='bait-screen--container'>
        <img className='bait-screen--avatar' src={'./baits/banana.png'} alt='bait'/>
      </div>
    </section>
  )
}