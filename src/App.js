import React, { Component } from 'react';
import Header from './header/header.js'
import Card from './card/card'
import Pic from './blogApp.png'
import Landing from './landingPage.png'
import Capstone from './capstone.png'
import Footer from './footer/footer.js'
import Me from './me.JPG'
import './App.css'
import Skills from './skillsbar/Skills.js'
import Contact from './contact/contact.js'
import Cert from './fendCert.png'
import Workout from './workoverload.png'



class App extends Component {
  render () {
  return (
    <div>
      <img id='picHead' src={Me} alt='a pic of me' />
      <Header />
      <h2>About Me</h2>
      <Contact />
      <h2>Projects</h2>
      <div className='cards'>
        <Card name="Blog App" src="https://udacityblogsite.netlify.app/" img={Pic} github="https://github.com/0silverback0/udacityBlog"
        des="Project one. The objective was to build a simple blog site using HTML and CSS. Specifically using flexbox and grid was a requirement for this project" />
        <Card name="Landing Page" src="https://udacitylandingpage.netlify.app/" img={Landing} github="https://github.com/0silverback0/LandingPage" des="This is project two in the frontend
         developer nanodegree.Adding javascript to the project by manipulating the DOM also to make each section active when it is in view" />
        <Card name="Capstone project" src="https://capstonetravelapp.netlify.app/" img={Capstone} github="https://github.com/0silverback0/TravelApp"
        des="This is the capstone project. I used three API's, geonames to get longitude and latitude coordinance, openweathermap, to get weather data, and pixabay to get an image for the location. This project also uses webpack, and Sass." />
        <Card name="Workout Overload" src="https://workoutoverload.com/index" img={Workout} des="My first website built after learning HTML, CSS, and Javascript. This fitness site uses javascript to calculate 
        a persons one rep max also how weight a person should use based on their one rep max. Users can also determine their daliy calorie intake" />
      </div>
      <h2>Certifications</h2>
      <div id="certDiv">
        <img className="cert" src={Cert} alt="Fend" />
      </div>
      <Skills />
      <Footer />
    </div>
    
  )
  }
}



export default App