import Card from "./Card";

const Cardlist = ({label,data}) => {

 console.log(data);

 return (
  <>
  <div style={{alignContent:"center", width:"20%"}}>
   <h1>{label}</h1>
   {data?.map((card)=>(<div><Card id={card.id} title={card.title} tag={card.tag}/></div>))}
  </div>
  </>
 )


}

export default Cardlist;