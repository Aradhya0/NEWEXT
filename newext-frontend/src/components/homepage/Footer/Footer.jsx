import React from 'react'
import logo from '../../../assets/footer/newext.png'
import s1 from '../../../assets/footer/twitter.png'
import s2 from '../../../assets/footer/insta.png'
import s3 from '../../../assets/footer/git.png'
import s4 from '../../../assets/footer/mail.png'
import "./footer.css"
import "./bootstrap.min.css"
function Footer() {
  return (
    <>
    <footer className="site-footer bg-light margin mt-4">
    <div className="container-fluid">

      <div className="row">
        <div className="col-md-6 mb-2">
          <h3>Your feedback is valuable to us.<br/>
            Could you please let us know how we did?</h3>
        </div>
        <div className="col-md-4 padding mb-3 pr-6">
          <input type="email" placeholder="  Enter your email"/>

        </div>
        <div className="col-md-2 ">
          <button className="sendFooterBtn">Send</button>
        </div>
      </div>
      <div className="line">
        <hr/>
      </div>
    </div>
    <br/> 

    <div className="row">
      <div className="col-md-4 padding mt-4">
        <div className="padding ml-3 ">
          <img src={logo} alt=""/>
          <h3><br/>
            Operated by:<span>MSC KIIT</span><br/>
            Email:<span> support@msc.ac.in</span><br/>
            Phone no:<span> (+91)3856573974</span><br/></h3>
            <span>License No. 8292A-@BGHA<br/>
            Signed on January 02, 2022</span> <br/>
          <br/>

          <div className ="icon padding mt-5" >
          <img className="padding mr-3" src={s1} alt="" />
          <img className="padding mr-3" src={s2} alt="" />
          <img className="padding mr-3" src={s3} alt="" />
          <img className="padding mr-3" src={s4} alt="" />
          </div>
        </div>

      </div>

      <div className="col-md-8 padding pl-4">
        <div className="row">
          <div className="col-md-3 ml-auto padding mt-4 padding pl-4">
            <h2 className="footer-h">Business</h2>
    
            <a href="#">Business Trends</a><br />
            <a href="#">Startup</a><br />
            <a href="#">Leaders</a><br />
            <a href="#">Work Culture</a><br />
       
          </div>
          <div className="col-md-3 ml-auto padding mt-4 padding pl-4">
            <h2 className="footer-h ">Technnology</h2>
            <a href="#">Discover</a><br />
            <a href="#">Gadgets</a><br />
            <a href="#">Video Games</a><br />
            <a href="#">Automobile</a><br />
          </div>
          <div className="col-md-3 ml-auto padding mt-4 padding pl-4">
              <h2 className="footer-h ">Travel</h2>
            <a href="#">Discovery</a><br />
            <a href="#">Flights and Hotels</a><br />
            <a href="#">Tour & Destinations</a><br />
            <a href="#">Experience</a><br />
          </div>
          <div className="col-md-3 ml-auto padding mt-4 padding pl-4">
             <h2 className="footer-h ">Entertainment</h2>
            <a href="#">Music & Podcasts</a><br />
            <a href="#">Art & Design</a><br />
            <a href="#">Movies</a><br />
          </div>
          <div className="row padding mt-4 padding pl-4">
          <div className="col-md-3 ml-auto padding mt-4 padding pl-4">
            <h2 className="footer-h ">Politics</h2>
            <a href="#">Capital Journal</a><br />
            <a href="#">National Security</a><br />
            <a href="#">Politics Video</a><br />
          </div>
          <div className="col-md-3 ml-auto padding mt-4 padding pl-4">
            <h2 className="footer-h ">Sports</h2>
            <a href="#">Football</a><br />
            <a href="#">Racing</a><br />
            <a href="#">Basketball</a><br />
            <a href="#">Cricket</a><br />
          </div>
          <div className="col-md-3 ml-auto padding mt-4 padding pl-4">
            <h2 className="footer-h ">Lifestyle</h2>
            <a href="#">Family</a><br />
            <a href="#">Psychology</a><br />
            <a href="#">Fashion</a><br />
            <a href="#">Food & Culture</a><br />
          </div>
          <div className="col-md-3 ml-auto padding mt-4 padding pl-4">
            <h2 className="footer-h ">Help Center</h2>
            <a href="#">About Us</a><br />
            <a href="#">Contact</a><br />
            <a href="#">Privacy Policy</a><br />
            <a href="#">Terms & Conditions</a><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>
    
  )
}

export default Footer