import './GenderItem.scss';

export default function GenderItem(props) {

  return (
    <>
      <div className={props.className} onClick={() => props.setGender(props.name)}>
        <img src={`/${props.name}.png`} alt={props.name} />
        <span alt={props.name} style={{color: props.color}}>
          {props.name}
        </span>
      </div>
    </>
  )
}