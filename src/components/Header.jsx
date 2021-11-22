import React from 'react';
import Nav from "./common/Nav";
const Header = () => {
    return (
        <div>
            <Nav />

            <div className="container top-container">
                <div className="top-container-title">HAIR CUT</div>
                <div className="top-container-p">Let's Change Our Style!</div>
                <div className="top-container-buttons">
                    <a href="#">Let's Do It!</a>
                    <a href="#">Read More...</a>
                </div>
            </div>
            


        </div>
    );
}

export default Header;