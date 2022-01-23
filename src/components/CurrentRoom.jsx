import React, {useState} from 'react'
import AddItem from './AddItem';
import Header from './Header'
import HomeButton from './HomeButton';
import '../style/currentRoom.css'

export default function CurrentRoom(props) {
    //hooks
    const [flag, setflag] = useState(false)

    //functions
    const changeFlag = ()=>{setflag(!flag)};
    const addItems = (flag)=>{
        if(flag){
            return <AddItem room={props.room} changeFlag={changeFlag} updateItems={props.updateItems}/>
        }
    }

    return (
        <div>
            <HomeButton/>
            <Header header="Smart Home"/>
            <div className='roomInfo'>
                <p><span>Room Name:</span> {props.room.name}</p>
                <p><span>Room Type:</span> {props.room.type}</p>
            </div>
            <div>
                {props.room.items.map((item)=>{
                    return <button className='item' style={item.backgroundColor} onClick={()=>{props.updateItemMode(props.room.name, item.name);}}>{item.name}</button>
                })}
            </div>
            <button className='addRoomButton' onClick={()=>{changeFlag()}}>Add Item</button>
            {addItems(flag)}
        </div>
    )
}
