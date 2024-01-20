import React, { useContext, useState } from "react";
 
const Navbar = (props) => {

 const [value1, setValue1] = useState('Status');
 const [value2, setValue2] = useState('Priority');

 //const data = useContext(MyContext);

 /*const handleClick = () => {
  props.onDataChange("Hello React");
 }*/

 const handleChange1 = (event) => {
  setValue1(event.target.value);
 }

 const handleChange2 = (event) => {
  setValue2(event.target.value);
 }

 const options1 = [
  {label:"status",value:"Status"},
  {label:"user",value:"User"},
  {label:"priority",value:"Priority"},
 ]

 const options2 = [
  {label:"priority",value:"Priority"},
  {label:"title",value:"Title"},
 ]


    return (
        <>
            <nav style={{
                height: 75,
                backgroundColor: "white",
                padding: 2,
                alignItems: "start",
                alignContent:"start",
                justifyContent:"center",
                placeContent:"start",
                display: "flex"
              }}>
               <div>
               {/*<button style={{
                fontSize: 20,
                padding: 10,
                marginTop: "auto",
                marginBottom: "auto"
                
              }} onClick={handleClick}>{props.data}</button>*/}
              
              </div>
             
              <h1>Filtered based on  
               <select value={value1} onChange={handleChange1}>
                {options1.map((option)=>(
                 <option>{option.value}</option>
                ))}
               </select>
               and 
               <select value={value2} onChange={handleChange2}>
                {options2.map((option)=>(
                 <option>{option.value}</option>
                ))}
               </select> </h1>
              
                
            </nav>
        </>
    );
};
 
export default Navbar;