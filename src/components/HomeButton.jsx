import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa';
import '../style/homeButton.css'



export default function HomeButton() {
    return (
        <div className='iconContainer'>
            <Link to='/'>
                <FaHome className='icon'/>
            </Link>
        </div>
    )
}
