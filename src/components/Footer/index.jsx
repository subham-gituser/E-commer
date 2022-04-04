import React from 'react';
import playStore from "../../assets/images/playstore.png";
import appleStore from '../../assets/images/Appstore.png';
import "../../assets/style/components/footer.scss";

const Footer = () => {
  return (
    <footer id="footer">
        <div className="leftFooter">
            <h3>DOWNLOAD OUR APP</h3>
            <p>Download App for Android and Ios mobile phone</p>
            <img src={playStore} alt="playstore"/>
            <img src={appleStore} alt="Appstore"/>
        </div>
        <div className="middleFooter">
            <h2>ECOMMERCE</h2>
            <p>Quality is our strength</p>
            <p>Copyrights 2021 &copy; MeSubham Gouda</p>
        </div>
        <div className="rightFooter"> 
        <h4>Follow us</h4>
        <a href="https://www.youtube.com/">YOUTUBE</a>
        <a href="https://www.google.com/">GOOGLE</a>
        <a href="https://www.Facebook.com/">FACEBOOK</a>
        </div>
    </footer>
  )
}

export default Footer