import React from 'react'

const block = {
    display: 'inline',
    margin: '10px',
    textDecoration: 'none',
    color: 'blue'
}

const img = {
    width: '100%',
    height: '200px',
    marginBottom: '20px'
}
const Card = (props) => {
    return (
        <div className='card'>
            <img style={img} src={props.img} alt="pic" />
            <p>{props.des}</p>
            <a style={block} href={props.src}>{props.name}</a>
            <a style={block} href={props.github}>View code</a>
        </div>
    )
}

export default Card