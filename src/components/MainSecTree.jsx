import React from 'react';
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";
const MainSecTree = () => {
    return (
        <div>
            <div className="main-sec-tree-container">
                <div className="services">
                    <h4>Fashion</h4>
                </div>
                <div className="main-sec-tree-cards">
                    <Roll>
                        <div className="main-sec-tree-card-1">
                            <img src="./img/main-j-1.jpg" alt="" />
                        </div>
                    </Roll>
                    <Slide right>
                        <div className="main-sec-tree-card-2">
                            <img src="./img/main-j-2.jpg" alt="" />
                        </div>
                    </Slide>
                    <Roll>
                        <div className="main-sec-tree-card-3">
                            <img src="./img/main-j-3.jpg" alt="" />
                        </div>
                    </Roll>
                </div>
            </div>
        </div>
    );
}

export default MainSecTree;