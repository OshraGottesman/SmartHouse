import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Room from './Room'
import '../style/home.css'


export default function Home(props) {
    return (
        <div>
            <Header header="Smart Home"/>
            <div className='roomContainer'>
                {props.rooms.map((room)=>{
                    return <Room room={room} enterRoom={props.enterRoom}/>
                })}
            </div>
            <Link to='/addNewRoom' >
                <button className='addRoom'>+</button>
            </Link>
        </div>
    )
}
