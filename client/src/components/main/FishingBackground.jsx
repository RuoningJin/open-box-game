import './FishingBackground.scss';

export default function FishingBackground(props) {

  return (
    <section className='fishing-background'>
      {props.session === 1 && <div className='boat'></div>}
      {props.session === 2 && <div className='boat2'></div>}
      
      {props.session === 1 && <div className='cloud'></div>}
      {props.session === 2 && <div className='trees'></div>}
      
      <div className='fish fish1'></div>
      <div className='fish fish2'></div>
      <div className='fish fish3'></div>
      <div className='fish fish4'></div>
      <div className='fish fish5'></div>
      <div className='fish fish6'></div>

      <div className='wave-bottom'></div>
      <div className='wave wave1'></div>
      <div className='wave wave2'></div>
      <div className='wave wave3'></div>
      <div className='wave wave4'></div>
    </section>
  )
}