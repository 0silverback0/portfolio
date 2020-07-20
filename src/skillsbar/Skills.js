import React from 'react'

const style = {
  margin: '0px',
  width: '200px'
}

const Skills = () => {
    return (
        <div id='skill'>
        <p style={style}>HTML</p>
<div className="container">
  <div className="skills html">80%</div>
</div>

<p style={style}>CSS</p>
<div className="container">
  <div className="skills css">80%</div>
</div>

<p style={style}>JavaScript</p>
<div className="container">
  <div className="skills js">65%</div>
</div>

<p style={style}>ReactJS</p>
<div className="container">
  <div className="skills react">30%</div>
</div>

<p style={style}>PHP</p>
<div className="container">
  <div className="skills php">60%</div>
</div>

<p style={style}>MYSQL</p>
<div className="container">
    <div className="skills mysql">60%</div>
</div>
</div>
    )
}

export default Skills