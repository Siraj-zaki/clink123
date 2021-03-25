import React from 'react'

import smallcross from '../assets/smallcross.png'
import '../css/selecteditem.css'
class SelectedItem extends React.Component {
    render() {
        return (

            <div className="inner-cart-div mt-5 border-top pt-5">
                <div className="cart-left-side">
                    <img src={this.props.imgsrc} alt="" />
                </div>
                <div className="cart-center-side">
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', flexDirection: 'column' }}>
                        <span className="div-right-side-heading m-2" style={{ fontSize: '20px' }} >{this.props.heading}</span>
                        <span className="div-right-side-small-heading m-2" style={{ textAlign: 'left' }} >{this.props.headingsmall}</span>
                        <div className="m-2" style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', width: '100%' }} >
                            <span className="li-size" style={{ display: 'flex', justifyContent: "center", alignItems: "center", width: '100%', borderRight:'1px solid black' }} >{this.props.size}</span>
                            <span className="li-size" style={{ display: 'flex', justifyContent: "center", alignItems: "center", width: '100%'  }} >Price {this.props.price}</span>
                        </div>
                    </div>
                </div>
                <div className="cart-right-side">
                    <img src={smallcross} alt="" />
                </div>



            </div>
        )
    }
}
export default SelectedItem