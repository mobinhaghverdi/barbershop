import React from 'react';
import Flip from "react-reveal/Flip";

const MainSecOne = () => {
    return (
        <div className="main-sec-one-container">
            <div className="services">
                <h4>Services</h4>
            </div>
            <div className="small-container">
                <div className="sec-one-right">
                    <h3 className="sec-one-title">Make Up <i className="gg-attachment attach-icon"></i></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et tempore blanditiis delectus provident, porro molestiae quo vitae voluptatibus impedit, eligendi velit iste illo amet aut inventore architecto sequi maiores.</p>
                    <h3 className="sec-one-title">Fashion <i className="gg-attachment attach-icon"></i></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et tempore blanditiis delectus provident, porro molestiae quo vitae voluptatibus impedit, eligendi velit iste illo amet aut inventore architecto sequi maiores.</p>
                    <h3 className="sec-one-title">CollerFul Hair <i className="gg-attachment attach-icon"></i></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et tempore blanditiis delectus provident, porro molestiae quo vitae voluptatibus impedit, eligendi velit iste illo amet aut inventore architecto sequi maiores.</p>
                </div>
                <div className="sec-one-left">
                    <Flip right>
                        <img src="./img/hero-main.jpg" alt="" />
                    </Flip>
                </div>

            </div>
        </div>
    );
}

export default MainSecOne;