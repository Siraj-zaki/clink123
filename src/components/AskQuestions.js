import React from 'react'
import '../css/askquestion.css'
import Accordion from 'react-bootstrap/Accordion'
// import bgImg1 from '../assets/bgImg1.svg'
import askedimg from '../assets/askedimg.png'
import liImg from '../assets/liImg.png'
import dot from '../assets/dot.png'
import Blogs from './Blogs'
class AskQuestions extends React.Component {
    render() {
        return (
            <div className="products bgimg-url" style={{ position: 'relative', display: 'flex', justifyContent: "center", alignItems: 'center', marginTop: '1rem' }} >
                <div className="section-ask mt-5">
                    <div>
                        <img src={askedimg} alt="" />
                    </div>
                    <span className="section-products-h1" style={{ zIndex: 20, position: 'relative',marginTop:0 }}><span style={{ color: " #a10948" }}>Frequently Asked</span></span>
                    <span className="section-products-h1 m-0" style={{ zIndex: 20, position: 'relative' }}><span style={{ color: "black" }}>Questions</span></span>
                    <div className="css-grid-1">
                        <div style={{ width: '100%' }}>
                            <img width="100%" src={liImg} alt="" />
                        </div>
                        <div className="section-ask-right-side" style={{ width: '100%' }}>
                            <Accordion style={{ width: '100%' }} defaultActiveKey={false}>
                                <div className="section-ask-right-side" >
                                    <Accordion.Toggle class="li li-1" variant="link" eventKey="0">
                                        <span style={{ paddingRight: 20, paddingLeft: 20 }}><img src={dot} alt="" /></span>  Do I need to be 21 to order alcohol from Saucey?
                                      </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <div className="li-data" style={{ width: '100%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </div>
                                    </Accordion.Collapse>


                                    <Accordion.Toggle class="li li-3" variant="link" eventKey="1">
                                        <span style={{ paddingRight: 20, paddingLeft: 20 }} ><img src={dot} alt="" /></span>  Do I need to be 21 to order alcohol from Saucey?
      </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <div className="li-data" style={{ width: '100%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </div>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle class="li li-3" variant="link" eventKey="2">
                                        <span style={{ paddingRight: 20, paddingLeft: 20 }} ><img src={dot} alt="" /></span>  Do I need to be 21 to order alcohol from Saucey?
      </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <div className="li-data" style={{ width: '100%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </div>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle class="li li-3" variant="link" eventKey="3">
                                        <span style={{ paddingRight: 20, paddingLeft: 20 }} ><img src={dot} alt="" /></span>  Do I need to be 21 to order alcohol from Saucey?
      </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <div className="li-data" style={{ width: '100%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </div>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle class="li li-3" variant="link" eventKey="4">
                                        <span style={{ paddingRight: 20, paddingLeft: 20 }} ><img src={dot} alt="" /></span>  Do I need to be 21 to order alcohol from Saucey?
      </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <div className="li-data" style={{ width: '100%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </div>
                                    </Accordion.Collapse>
                                </div>
                            </Accordion>
                        </div>
                    </div>
                    
                    

                </div>

            </div>

        )
    }
}
export default AskQuestions
