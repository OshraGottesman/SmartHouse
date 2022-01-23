import React from 'react'
import '../style/header.css'

export default function Header(props) {
    return (
        <div>
            <h1 className='title'>{props.header}</h1>
        </div>
    )
}
