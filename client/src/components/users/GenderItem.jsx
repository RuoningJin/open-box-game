import './GenderItem.scss';

export default function GenderItem(props) {

  //to have different margins for the two GenderItems
  const leftMargin = {
    marginRight: '7vw'
  }
  const rightMargin = {
    marginLeft: '7vw'
  }
  const style = props.name === 'girl' ? leftMargin : rightMargin;
  
  return (
    <>
      <div 
        className={props.className} 
        onClick={() => props.setGender(props.name)}
        style={style}
      >
        <img src={`/${props.name}.png`} alt={props.name}/>
        <span alt={props.name} style={{color: props.color}}>
          {props.name}
        </span>
      </div>
    </>
  )
}