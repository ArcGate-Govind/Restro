import React, { useState } from "react";
import "../App.css";
import Footer from "./Footer";
import Timer from './Timer';
const Navbar = () => {
  const [showLanguage, setShowLanguage] = useState(false);
  const [email, setEmail] = useState("")
  

  const handleClick = () => {
    // setToggle(false);
  };
  const submitForm = (e) => {
    e.preventDefault()
    vaildation()
  }

  const vaildation = () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('email invalid')
    }  else {
      let newData = {  email: email, }
      let userDataCheck = sessionStorage.getItem('Emailuser');
      if (userDataCheck == null) {
        userDataCheck = []
      } else {
        userDataCheck = JSON.parse(userDataCheck)
      }
      let checkEmail = userDataCheck.find(data => data.email === newData.email)
      if (checkEmail) {
        alert("User already present")``
      } else {
        userDataCheck.push(newData)
        sessionStorage.setItem('userData', JSON.stringify(userDataCheck));
     
        setEmail("");
       
        
      

      }

    }
  }


  return (
    <>
      <div className="top-container">
        <div className="header">
          <div className="nav-start">
            <ul className="img-dropdown" onClick={() => setShowLanguage(!showLanguage)}>
              <li>
                <a className="text_decor" href="" onClick={event => event.preventDefault()}>
                  <img src="images/flags/US.png" />
                  <span className="destain">Deutsch</span>
                </a>
              </li>
            </ul>
            {showLanguage && (
              <div className="fleg_select">
                <ul className="dropdown_img">
                  <li>
                    <a href="">
                      <img src="images/flags/DE.png" />
                      <span className="destain">Deutsch</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="images/flags/GB.png" />
                      <sapn className="destain"> English(UK)</sapn>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="images/flags/FR.png" />
                      <span className="destain">Français</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="images/flags/RO.png" />
                      <span className="destain">Română</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="images/flags/IT.png" />
                      <span className="destain">Italiano</span>
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a href="#">
                      <img src="images/flags/ES.png" /> Español{" "}
                      <span className="label label-default">soon</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/flags/BR.png" /> Português{" "}
                      <span className="label label-default">soon</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/flags/JP.png" /> 日本語{" "}
                      <span className="label label-default">soon</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/flags/TR.png" /> Türkçe{" "}
                      <span className="label label-default">soon</span>
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="nav-end">
            <div className="social-link">
              <a href="
              https://www.facebook.com">
                <i className="fa fa-facebook-square"></i>
                <span className="link-text"> Like</span>
              </a>
            </div>
            <div className="social-link">
              <a href="
              https://twitter.com ">
                <i className="fa fa-twitter"></i>
                <span className="link-text"> Tweet</span>
              </a>
            </div>
            <div className="social-link">
              <a href="
            https://in.linkedin.com">
                <i className="fa fa-gittip"></i>
                <span className="link-text"> Linkdin</span>
              </a>
            </div>
          </div>
        </div>

        <div className="logo_set">
          <h1 className="logo-cursive">Restaurant</h1>
        </div>
        <div>
          <h1 className="line-cen-for">
            The smallest little eatery in town with the biggest taste.
          </h1>
          <h5 className="line2-cen-for">
            Join the waiting list for the beta. We keep you posted.
          </h5>
        </div>
        <div className="form-set">
          <div>
            <input
              type="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="form-control"
              placeholder="Your email here..."
            />
          </div>
          <div className="BTN">
          
            <button type="submit" className="btn btn-warning btn-fill "    onClick={(e) => submitForm(e)}    >
              Notify Me
            </button>
          </div>
        </div>
        <div>
        <p className="come">Coming Soon <span>&#9996;</span></p>
        <Timer/>
        <Footer/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
