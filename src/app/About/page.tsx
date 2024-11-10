import React from 'react'
import Header from '../Header/page'
import Image from 'next/image'
const About = () => {
  return (

<div>

<Header/>
        {/* about page */}


<section>
    <div className="main-about">
        <div className="info-about">
            <div className="first"><h1 className="intro">LET ME INTRODUCE MYSELF</h1></div>
            <div className="sec"><h3 className="heading">About Me</h3></div>
            <div className="story"><h1 className="story">A Story Of Good</h1></div>
            <div className="para"><p className="aboutme">Hi, I&apos;m <a>Syed Farooq Ali</a>! I have completed my intermediate education and am currently diving into the world of cutting-edge technology through the Governor&apos;s IT Initiative for Web <a>3.0</a> Development, Gen <a>AI</a>, and <a>Metaverse</a>. Alongside this, I am also focused on mastering full stack development, which has become a true passion of mine. I am eager to apply my skills in innovative projects and contribute to the future of tech.</p></div>
                <div className="pro">All of my projects are available at <a href="https://github.com/SyedFarooqAlii">Click Here</a>.</div>
                
                <div className="reach">How to reach me <a>syedfarooqali15@gmail.com</a>.
                </div>
          <div>  <button className="aboutbtn">Read More</button></div>



</div>
    <div className="imge-about">
    <Image height={100} width={100} src="/car2.avif" alt="my pic"/></div>
    

</div>
</section>
    </div>
  )
}

export default About
