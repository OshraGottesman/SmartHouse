import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../style/home.css'

export default function Room(props) {
    //hooks
    const [backGround, setbackGround] = useState({backgroundColor: props.room.color})
    return (
        <div>
            <Link to='/currentRoom'>
                <button className='roomButton' onClick={()=>{props.enterRoom(props.room)}} style={backGround}>
                    {props.room.name}
                </button>
            </Link>
        </div>
    )
}
