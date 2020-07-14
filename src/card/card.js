import React from 'react'

const style = {
    //height: '550px',
    width: '400px',
    border: ' 1px solid black',
    boxShadow: '2px 2px  5px blue',
    margin: '20px 0px 0px 20px',
    padding: '10px'
}

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
        <div style={style}>
            <img style={img} src={props.img} alt="pic" />
            <p>{props.des}</p>
            <a style={block} href={props.src}>{props.name}</a>
            <a style={block} href={props.github}>View code</a>
        </div>
    )
}

export default Card