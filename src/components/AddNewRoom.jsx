import React, {useState} from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import HomeButton from './HomeButton';
import '../style/addNewRoom.css'


export default function AddNewRoom(props) {
    //hooks
    const [roomType, setroomType] = useState("");
    const [roomName, setroomName] = useState("");
    const [roomColor, setroomColor] = useState("")

    //functions
    const checkValid = ()=>{
        if(roomType.length>0 && roomName.length>0 && roomName.length<10 && roomColor.length>0){
            props.addRoom(roomType, roomName, roomColor)
        }
        else{
            alert("the fields weren't filled properly. please try again")
        }
    }


    return (
        <div>
            <HomeButton/>
            <Header header="Add New Room"/>
            <input className='input' onChange={e=>setroomName(e.target.value)} type="text" placeholder='Enter Room Name' />
            <select className='input' onChange={e=>setroomType(e.target.value)} name="roomType" id="roomType">
                <option value="">Choose room type</option>
                <option value="bedroom">Bedroom</option>
                <option value="bathroom">Bathroom</option>
                <option value="kitchen">Kitchen</option>
            </select>
            <select className='input' onChange={e=>setroomColor(e.target.value)} name="roomColor" id="roomColor">
                <option value="">Choose room color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="purple">Purple</option>
                <option value="pink">Pink</option>
                <option value="orange">Orange</option>
            </select>
            <Link to='/'>
                <button className='addRoomButton' onClick={()=>{checkValid()}}>Add Room</button>
            </Link>
        </div>
    )
}
