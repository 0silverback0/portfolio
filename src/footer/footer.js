import React from 'react'
import Pics from '../react.svg'

const style= {
    backgroundColor: 'grey',
    width: '100%',
    height: '200px'
}

const img = {
    width: '100px',
    height: '100px',
    position: 'relative',
    left: '50%',
    top: '30%'
}
const Footer = () => {
    return (
    <footer style={style}>
        <img style={img} src={Pics} alt="react logo" />
    </footer>
    )
}

export default Footer