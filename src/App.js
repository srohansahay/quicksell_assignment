import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, createContext } from "react";
//import Navbar from './components/Navbar';
import Cardlist from './components/Cardlist';
import { render } from '@testing-library/react';

function App() {

  const url = "https://api.quicksell.co/v1/internal/frontend-assignment";
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);


  const fetchInfo = async () => {
    const res = await fetch(url);
    const d = await res.json();
    setTickets(d.tickets);
    setUsers(d.users);
    console.log(tickets);
  }


  useEffect( ()=>{
    fetchInfo();
  },[])

  function sortData (property) {
    console.log(tickets);
     return tickets.reduce(function(memo,x){
      if(!memo[x[property]]) {memo[x[property]]=[];}
      memo[x[property]].push(x);
  //    console.log(memo);
      return memo;
      
     }, {})
  }

  const sorted = sortData('status');
 // console.log(sorted.Todo);

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
    
    <div className="App">
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
      <div style={{display:"flex", width:"100%", justifyContent:"space-around"}}>
      <Cardlist label={"Backlog"} data={sorted.Backlog}/>
        <Cardlist label={"Todo"} data={sorted.Todo}/>
        <Cardlist label={"In progress"} data={tickets.filter(ticket => ticket.status == "In progress")}/>
        <Cardlist label={"Done"} data={sorted.Done}/>
        <Cardlist label={"Cancelled"} data={sorted.Cancelled}/>
      </div>
    </div>
    
  )
 }


export default App;
