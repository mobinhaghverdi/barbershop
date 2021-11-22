import React, { useState } from 'react';


const Nav = () => {


    const [Nav, setNav] = useState(false)

    return (
        <div>
            <div className="btn-nav-open" onClick={() => setNav(!Nav)}>
                <i className={Nav ? "gg-close-r" : "gg-menu-grid-o"} ></i>
            </div>
            <div className="nav-container" style={Nav ? {width: "290px"} : {width: "0"}}>
                <nav>
                    <ul>
                        <li><a href="#">Home <i className="gg-home-alt"></i></a></li>
                        <li><a href="#">Services <i className="gg-browser"></i></a></li>
                        <li><a href="#">Reservation <i className="gg-browse"></i></a></li>
                        <li><a href="#">About <i className="gg-info"></i></a></li>
                        <li><a href="#">Support <i className="gg-headset"></i></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Nav;