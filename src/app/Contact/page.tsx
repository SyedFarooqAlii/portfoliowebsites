import React from 'react'
import Header from '../Header/page'
const Contact = () => {
  return (
    <div>
        <Header/>
{/* contact page */}

<section className="contact" id="contact">
   
   <h1>Contact <a className="a">Me</a> </h1>
<form action="">
<div className="input-group">    
  <div className="input-box">
   <input type="text" placeholder="Full Name..."></input>
   <input type="email" placeholder="Email.."></input>
  </div>     
  <div className="input-box">
   <input type="number" placeholder="Phone Number.."></input>
   <input  type="text" placeholder="Subject.."></input>
  </div>
  <div className="input-group2">
<textarea cols={39} rows={10} placeholder="Your Message..."></textarea>
<button className="btn1">Send Message</button>
</div> 
</div>

</form>


</section>


<footer>
<div className="social">
   <a href=""><i id="foo-i" className='bx bxl-facebook'></i></a>
   <a href=""><i id="foo-i" className='bx bxl-instagram' ></i></a>
   <a href=""><i id="foo-i" className='bx bxl-github' ></i></a>
   <a href=""><i id="foo-i" className='bx bxl-linkedin' ></i></a>
</div>
<ul className="list-footer">
   <li>
       <a href="#">FAQ</a>
   </li>
   <li>
       <a href="#">About</a>
   </li>
   <li>
       <a href="#">Skills</a>
   </li>
   <li>
       <a href="#">Project</a>
   </li>
   <li>
       <a href="#">Contact</a>
   </li>
</ul>
<p className="copyright">
  @  Syed Farooq Ali <span> | </span> All Right Reserved
</p>
</footer>


    </div>
  )
}

export default Contact