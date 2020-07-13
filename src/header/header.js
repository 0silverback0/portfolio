import React from 'react'

const style = {
    width: '100%',
    height: '100px',
    margin: '0px',
    backgroundColor: 'blue',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#eee'
}
const Header = () =>  {
    return (
    <header>
        <h1 style={style}>My Portfolio built with ReactJS</h1>
    </header>
    )

}
export default Header