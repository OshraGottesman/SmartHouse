import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddNewRoom from "./AddNewRoom";
import CurrentRoom from "./CurrentRoom";
import '../style/App.css';
import Home from "./Home";

function App() {
  //hooks
  const [rooms, setrooms] = useState([])
  const [currentRoom, setcurrentRoom] = useState({})

  //functions
  const addRoom = (type, name, color)=>{
    setrooms([{type:type, name:name, color:color, items:[]}, ...rooms])
  }
  const enterRoom = (room)=>{
    setcurrentRoom(room);
  }
  const updateItems = (name, newItem)=>{
    let index = rooms.findIndex(x=> x.name == name);
    let update = rooms[index];
    update.items.push(newItem);
    setrooms([...rooms.slice(0,index), update, ...rooms.slice(index+1)])
  } 
  const updateItemMode = (name, item)=>{
    let index = rooms.findIndex(x=> x.name == name);
    let roomToUpdate = rooms[index];
    let itemIndex = roomToUpdate.items.findIndex(x=>x.name == item);
    if(roomToUpdate.items[itemIndex].backgroundColor.backgroundColor=="red"){
      roomToUpdate.items[itemIndex].backgroundColor={backgroundColor:"green"};
    }
    else{
      roomToUpdate.items[itemIndex].backgroundColor={backgroundColor:"red"};
    }
    setrooms([...rooms.slice(0,index), roomToUpdate, ...rooms.slice(index+1)]);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home rooms={rooms} enterRoom={enterRoom}/>}/>
          <Route path="/addNewRoom" element={<AddNewRoom addRoom={addRoom}/>}/>
          <Route path="/currentRoom" element={<CurrentRoom room={currentRoom} updateItems={updateItems} updateItemMode={updateItemMode}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
