import '../css/home.css';
import React from 'react'
import Navbar from './Navbar'
import liquor from '../assets/liquorstore.png'
import delivery from '../assets/delivery.png'
import experience from '../assets/experience.png'
import clink from '../assets/clink.png'
import aboutusimg from '../assets/aboutusimg.png'
import '../css/aboutus.css'

import Footer from './Footer';

class Home extends React.Component {

    render() {
        return (
            <div className="Home bgimg-1" style={{ position: 'relative' }}>
                {/* <img className="bgimg-1" src={bgimg1} alt="" /> */}
                <Navbar />
                <div className="section-main">
                    <div className="section-1">
                        <div className="left-side">
                            <span className="section-left-side-h1 new-color">Knock Knock !</span>
                            <span className="section-left-side-h1 new-color">Who's There</span>
                            <span style={{ height: '6rem', width: '20rem', marginTop: 40 }}>
                                <img width="100%" height="100%" src={clink} alt="" />
                            </span>
                            <p className="section-left-side-p mt-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus </p>
                        </div>
                        <div className="right-side">
                            <img className="img-responsive" src={aboutusimg} alt="" width="100%" />
                        </div>
                    </div>
                </div>
                <div className="about-us">
                    <div className="about-us-grid">
                        <div className="same-class about-us-left-side">
                            <span style={{ width: '10rem' }}>
                                <img width="100%" height="100%" src={liquor} alt="" />
                            </span>
                            <span className="section-left-side-h1 new-color" style={{ fontSize: '5.2rem', marginTop: 10 }}> liquor store</span>
                            <p className="section-left-side-p " style={{ fontSize: '3.5rem', fontWeight: 'normal', marginLeft: '13rem' }}>You Deserve</p>

                        </div>
                        <div className="same-class about-us-center-side">
                            <span style={{ width: '10rem' }}>
                                <img width="100%" height="100%" src={delivery} alt="" />
                            </span>
                            <span className="section-left-side-h1 new-color" style={{ fontSize: '5.2rem', marginTop: 10 }}> Delivery</span>
                            <p className="section-left-side-p " style={{ fontSize: '3.5rem', fontWeight: 'normal', marginLeft: '13rem' }}>on location</p>

                        </div>
                        <div className="same-class about-us-right-side">
                            <span style={{ width: '10rem' }}>
                                <img width="100%" height="100%" src={experience} alt="" />
                            </span>
                            <span className="section-left-side-h1 new-color" style={{ fontSize: '5.2rem', marginTop: 10 }}> Experience</span>
                            <p className="section-left-side-p " style={{ fontSize: '3.5rem', fontWeight: 'normal', marginLeft: '13rem' }}>Best Liquor</p>
                        </div>
                    </div>
                    <p className="section-left-side-p " style={{ fontSize: '6.5rem', fontWeight: 'bold', marginTop: '10rem' }}>Who are We</p>
                    <p className="section-left-side-p mt-5" style={{width:'70rem',textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dapibus tristique sem in molestie. Phasellus ac justo et libero consectetur laoreet. Donec varius tellus sit amet justo faucibus lobortis. Nam vehicula eros sit amet porttitor lacinia. Donec ut ex eu magna mollis viverra non at metus. Cras ligula libero, pulvinar a elit ac, pellentesque sodales lacus. Donec augue nulla, pretium et aliquet at, pellentesque et turpis. Etiam ultricies porta pulvinar. Mauris nunc lorem, suscipit ut rhoncus ac, maximus ac libero. </p>
                    <p className="section-left-side-p mt-5" style={{width:'70rem',textAlign:'center'}}>Proin sollicitudin mollis fringilla. Donec iaculis augue vel vestibulum sollicitudin. Mauris ullamcorper mi metus, vitae ullamcorper turpis iaculis vitae. Aenean eleifend, dui quis vulputate vulputate, diam erat volutpat lectus, maximus ultrices erat eros egestas nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed libero mauris, rhoncus quis tempor vel, laoreet at justo. Cras at dignissim felis. Sed accumsan lectus vitae arcu vulputate, id luctus odio malesuada.</p>

                </div>
                <Footer />
            </div>
        )
    }

};
export default Home;
