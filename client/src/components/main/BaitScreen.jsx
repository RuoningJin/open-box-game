import './BaitScreen.scss';

export default function BaitScreen(props) {

  return (
    <section className='bait-screen'>
      <div className='bait-screen--container'>
        <img src={`./baits/${props.bait}.png`} alt='bait'/>
      </div>
    </section>
  )
}