
const Card = ({id,title,tag}) => {

 return (
  
  <div style={{backgroundColor:"white", margin:10, padding: 10, textAlign: "start", paddingLeft:10, paddingRight:10, borderRadius:7}}>
    <p>{id}</p>
    <p style={{fontWeight: 650}}>{title}</p>
    <p >{tag}</p>
  </div>
  
 )

}

export default Card;