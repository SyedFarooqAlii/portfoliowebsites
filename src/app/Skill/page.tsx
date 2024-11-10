import React from 'react'
import Header from '../Header/page'
const Skill = () => {
  return (
    <div>
        <Header/>

{/* skill section */}

<section className="skill-sec">
        <div className="main-text">
            <span className="mt">TECHNICAL <span className="col"> &</span> PROFESSIONAL</span>
            <h2 className="ms">MY <span> SKILLS</span></h2></div>
        <div className="main-skill">
            <div className="skill-left">
                <h3><span className="col">TECHNICAL</span> SKILLS</h3>
                <div className="skill-bar">
                    <div className="info-skill">
                        <p className="skill">HTML</p>
                        <p className="skill">85%</p>
                    </div>
                    <div className="bar"><span className="html"></span></div>
                </div>
            

            <div className="skill-bar">
                <div className="info-skill">
                    <p className="skill">CSS</p>
                    <p className="skill">85%</p>
                </div>
                <div className="bar"><span className="css"></span></div>
            </div>
        

        <div className="skill-bar">
            <div className="info-skill">
                <p className="skill">JAVASCRIPT</p>
                <p className="skill">75%</p>
            </div>
            <div className="bar"><span className="javascript"></span></div>
        </div>

        <div className="skill-bar">
            <div className="info-skill">
                <p className="skill">TYPESCRIPT</p>
                <p className="skill">75%</p>
            </div>
            <div className
            ="bar"><span className="typescript"></span></div>
        </div>
    
        <div className="skill-bar">
            <div className="info-skill">
                <p className="skill">NEXT.JS</p>
                <p className="skill">60%</p>
            </div>
            <div className="bar"><span className="nextjs"></span></div>
        </div>
    
    

        </div>

        <div className="skill-right">
            <h3><span className="col"> PROFESSIONAL</span> SKILLS</h3>
            <div className="professional">
                <div className
                ="box-skill">
                    <div className="circle">
                      
                        <big className="progress">90%</big>
                    </div>
                    <div className="text-skill">
                        <small>Team Work</small>
                    </div>
                </div>
                

                <div className="box-skill">
                    <div className="circle2">
                      <big className
                      ="progress2">90%</big>
                    </div>
                    <div className="text-skill">
                        <small>Creativity</small>
                    </div>
                </div>


                <div className="box-skill">
                    <div className="circle3">
                      
                        <big className="progress3">90%</big>
                    </div>
                    <div className="text-skill">
                        <small>Project Management</small>
                    </div>
                </div>

                <div className="box-skill">
                    <div className="circle4">
                        
                        <big className="progress4">90%</big>
                    </div>
                    <div className="text-skill">
                        <small>Communication</small>
                    </div>
                </div>





            </div>
        </div>

    </div>
</section>

    </div>
  )
}
export default Skill