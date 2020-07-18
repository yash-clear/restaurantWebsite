import React from 'react';
import {Link} from 'react-router-dom'
function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2" style={{display:"inline-block",marginTop:"0"}}>
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li ><Link to='/home' style={{textDecoration:"none",color:"black"}}>Home</Link></li>
                        <li><Link to='/aboutus'style={{textDecoration:"none",color:"black"}}>About Us</Link></li>
                        <li><Link to='/menu'style={{textDecoration:"none",color:"black"}}>Menu</Link></li>
                        <li><Link to='/contactus'style={{textDecoration:"none",color:"black"}}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5" style={{float:"center",display:"inline-block",marginLeft:"20%"}}>
                    <h5>Our Address</h5>
                    <address>
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
		              <i className="fa fa-phone fa-lg"></i> : +852 1234 5678<br /><br/>
		              <i className="fa fa-fax fa-lg"></i> : +852 8765 4321<br /><br/>
		              <i className="fa fa-envelope fa-lg"></i>:  <a href="mailto:confusion@food.net">
                         confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center" style={{float:"right",display:"inline-block", marginRight:"20%", }}>
                    <div className="text-center">
                      <p>  <a className="btn btn-social-icon btn-google" href="http://google.com/+">  <i className="fa fa-google-plus"></i></a></p><br></br>
                      <p>   <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id=">  <i className="fa fa-facebook"style={{color:"blue"}}>  </i></a></p><br></br>
                      <p > <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin">  </i></a></p><br></br>
                       <p ><a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"style={{color:"blue"}}></i></a></p><br></br>
                       <p> <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" style={{color:"red"}}></i></a></p><br></br>
                       <p><a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a></p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2018 Ristorante Con Fusion</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;