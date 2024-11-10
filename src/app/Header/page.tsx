import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div>
        <div className="navbar">
                <h3 className="logo">Syed <span>Farooq</span></h3>
                <i id="menu-icon" className
                ='bx bx-menu'></i>
                <nav> 
                    <Link href="/"> <span id="homea">Home</span></Link>
                      <Link href={"/About"}><span>About</span></Link>
                    <Link href={"/Skill"}>  <span>Skills</span></Link>
                      <Link href={"/Project"}><span>Projects</span></Link>
                      <Link href={"/Contact"}><span>Contact</span></Link>
                  
              
              </nav>
              </div>
    </div>
  )
}

export default Header