import React from 'react'
import Main from './Main/page'
import About from './About/page'
import Skill from './Skill/page'
import Project from './Project/page'
import Contact from './Contact/page'
const Home = () => {
  return (
    <div>
      <Main/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Home