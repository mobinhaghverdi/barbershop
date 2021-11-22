import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const MainSecTwo = () => {


    const items = [
        <div className="tweet-card">
            <img src="/img/tweet-hero-1.jpg" className="card-img-top" alt="" />
            <div className="card-name">Json Low</div>
            <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi, adipisci distinctio tenetur unde minima !</p>
            <div className="card-footer">8 Hours ago</div>
        </div>,
        <div className="tweet-card">
            <img src="/img/tweet-hero-2.jpg" className="card-img-top" alt="" />
            <div className="card-name">Cristiano Fred</div>
            <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi, adipisci distinctio tenetur unde minima !</p>
            <div className="card-footer">1 Days ago</div>
        </div>,
        <div className="tweet-card">
            <img src="/img/tweet-hero-3.jpg" className="card-img-top" alt="" />
            <div className="card-name">Sara Jim</div>
            <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi, adipisci distinctio tenetur unde minima !</p>
            <div className="card-footer">2 Days ago</div>
        </div>,
        <div className="tweet-card">
            <img src="/img/tweet-hero-4.jpg" className="card-img-top" alt="" />
            <div className="card-name">Lamo Ram</div>
            <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi, adipisci distinctio tenetur unde minima !</p>
            <div className="card-footer">1 Days ago</div>
        </div>,
        <div className="tweet-card">
            <img src="/img/tweet-hero-1.jpg" className="card-img-top" alt="" />
            <div className="card-name">Json Low</div>
            <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi, adipisci distinctio tenetur unde minima !</p>
            <div className="card-footer">8 Hours ago</div>
        </div>,
        <div className="tweet-card">
            <img src="/img/tweet-hero-2.jpg" className="card-img-top" alt="" />
            <div className="card-name">Cristiano Fred</div>
            <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi, adipisci distinctio tenetur unde minima !</p>
            <div className="card-footer">1 Days ago</div>
        </div>,
        <div className="tweet-card">
            <img src="/img/tweet-hero-3.jpg" className="card-img-top" alt="" />
            <div className="card-name">Sara Jim</div>
            <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi, adipisci distinctio tenetur unde minima !</p>
            <div className="card-footer">2 Days ago</div>
        </div>,
        <div className="tweet-card">
            <img src="/img/tweet-hero-4.jpg" className="card-img-top" alt="" />
            <div className="card-name">Lamo Ram</div>
            <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi, adipisci distinctio tenetur unde minima !</p>
            <div className="card-footer">1 Days ago</div>
        </div>
    ];
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };

    return (
        <div className="main-sec-two-container">

            <div className="tweets"><h4>Tweets</h4></div>
            <div className="tweets-cards">
                <AliceCarousel mouseTracking autoPlay={true} responsive={responsive} disableButtonsControls={true} autoPlayInterval={1000} infinite={true} items={items} />
            </div>
        </div>
    );
}

export default MainSecTwo;