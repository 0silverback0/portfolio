import React from 'react'

const style = {
  margin: '0px'
}

const Skills = () => {
    return (
        <div id='skill'>
        <p style={style} className="skillBar">HTML</p>
<div class="container">
  <div class="skills html">80%</div>
</div>

<p style={style} className="skillBar">CSS</p>
<div class="container">
  <div class="skills css">80%</div>
</div>

<p style={style} className="skillBar">JavaScript</p>
<div class="container">
  <div class="skills js">65%</div>
</div>

<p style={style} className="skillBar">ReactJS</p>
<div class="container">
  <div class="skills react">30%</div>
</div>

<p style={style} className="skillBar">PHP</p>
<div class="container">
  <div class="skills php">60%</div>
</div>

<p style={style} className="skillBar">MYSQL</p>
<div class="container">
    <div class="skills mysql">60%</div>
</div>
</div>
    )
}

export default Skills