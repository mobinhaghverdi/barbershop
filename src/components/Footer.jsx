import React from 'react';



const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-logo">
                <img src="./img/footer-logo.png" alt="" />
            </div>

            <div className="footer-nav">
                <ul className="col-footer-6">
                    <li><a href="#">Home <i className="gg-home-alt"></i></a></li>
                    <li><a href="#">Services <i className="gg-browser"></i></a></li>
                    <li><a href="#">Reservation <i className="gg-browse"></i></a></li>
                </ul>
                <div className="footer-bet-col">
                    
                </div>
                <ul className="col-footer-6">
                    <li><a href="#">About <i className="gg-info"></i></a></li>
                    <li><a href="#">Support <i className="gg-headset"></i></a></li>
                    <li><a href="#"> Contact  <i className="gg-instagram"></i></a></li>
                </ul>
            </div>
            <div className="footer-copyright">	&copy; Mobin Haghverdi</div>
        </div>
    );
}

export default Footer;