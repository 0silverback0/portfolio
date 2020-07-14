import React, { Component } from 'react';
import Header from './header/header.js'
import Card from './card/card'
import Pic from './blogApp.png'
import Landing from './landingPage.png'
import Capstone from './capstone.png'
import Footer from './footer/footer.js'
import Me from './me.JPG'
import './App.css'


const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const size = {
  width: '100%',
  height: '800px'
}

class App extends Component {
  render () {
  return (
    <div>
      <img style={size} src={Me} alt='a pic of me' />
      <Header />
      <div style={style}>
        <Card name="Blog App" src="https://udacityblogsite.netlify.app/" img={Pic} github="https://github.com/0silverback0/udacityBlog"
        des="Project one. The objective was to build a simple blog site using HTML and CSS. Specifically using flexbox and grid was a requirement for this project" />
        <Card name="Landing Page" src="https://udacitylandingpage.netlify.app/" img={Landing} github="https://github.com/0silverback0/LandingPage" des="This is project two in the frontend
         developer nanodegree.Adding javascript to the project by manipulating the DOM also to make each section active when it is in view" />
        <Card name="Capstone project" src="https://capstonetravelapp.netlify.app/" img={Capstone} github="https://github.com/0silverback0/TravelApp"
        des="This is the capstone project. I used three API's one to get longitude and latitude coordinance, then used that information to call another API to get the weather for that location
        and finally used the pixabay API to display a picture of the place to be traveled to. This project also uses webpack, and Sass." />
      </div>
      <Footer />
    </div>
    
  )
  }
}



export default App