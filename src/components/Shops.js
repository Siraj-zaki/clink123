import '../css/home.css';
import React from 'react'
import googlemap from '../assets/google.svg'
import yandex from '../assets/yandex.svg'
import location from '../assets/location.svg'
// import location2 from '../assets/location2.svg'
import Navbar from './Navbar'
import Footer from './Footer';



class Shops extends React.Component {
    state = {
        toggler: 1,
        surName: "",
        email: '',
        subject: '',
        message: '',
    }
    render() {
        console.log(this.state);
        return (
            <div className="Home bgimg-1" style={{ position: 'relative',backgroundColor:'white' }}>
                {/* <img className="bgimg-1" src={bgimg1} alt="" /> */}
                <Navbar />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '11rem', flexDirection: 'column' }} >
                    <div className="map w-100">
                        <div style={{ width: "100%" }}><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=12121%20magnolia%20boulevard+(Clink)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                    </div>
                    <div className="map-locations"><button className="map-btn" ><img src={googlemap} alt="" /> Go to map </button> <button className="map-btn" style={{ backgroundColor: '#35345a' }} ><img src={yandex} alt="" /> Go to map </button></div>
                    <div className="our-shops" ><span className="our-shops-heading" >Our Shops:</span></div>
                    <div className="locations">
                        <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', width: 'auto' }} >
                            <img src={location} alt="" />
                            <div>
                                <span className="location-heading">United States</span>
                                <p className="location-p">
                                    Murat Reis, Gazi Cd. No:55,<br />
                                    34664 Üsküdar/İstanbul
</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', width: 'auto' }}>
                            <img src={location} alt="" />
                            <div>
                                <span className="location-heading">United States</span>
                                <p className="location-p">
                                    2.Calısır Sokak Karlıd cadd.<br />
                                9/2 Uskudar.
</p>
                            </div>
                        </div>
                    </div>
                    <div className="locations-inputs mt-5">
                        <p className="location-input-heading w-100" >
                            Ask Us anything
                        </p>
                        <div className="w-100 d-flex " style={{ alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <input value={this.state.surName} onChange={(e) => this.setState({ surName: e.target.value })} type="text" placeholder="Name Surname" className="adresses-input mt-4" style={{ width: '33.3%' }} />
                            <input value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} type="text" placeholder="Your Email" className="adresses-input mt-4" style={{ width: '33.3%' }} />
                            <input value={this.state.subject} onChange={(e) => this.setState({ subject: e.target.value })} type="text" placeholder="Subject" className="adresses-input mt-4" style={{ width: '33.3%' }} />
                        </div>
                        <div className="w-100 d-flex " style={{ alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <textarea value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })} className="adresses-input mt-4" name="" id="" cols="30" rows="10" placeholder="Message" style={{ width: '100%', minHeight: 170, paddingTop: 10, paddingRight: 40 }}></textarea>
                            <button className="li-size  addtocart " style={{ minHeight: 70, border: 'none', width: 270, margin: '6rem',minWidth:270  }} onClick={() => window.location.href = "/"} >Send Message </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

};
export default Shops;
