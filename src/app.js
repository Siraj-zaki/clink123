import React from "react";
// import logo from './logo.svg';
// import "./App.css";

import { Provider } from 'react-redux'
import store from './services/Store/index'
import Home from './components/Home';
import {useSelector} from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const Test=()=>{
   const  name= useSelector(({cardItems})=>{return cardItems.name})
 
   return(
        <h1>test</h1>
    )
}
const App = () =>{

return(
    <Router>
<Provider store={store} >
{/* <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/> */}

<ToastContainer />
    <Test />
    <Home />
  </Provider>
  </Router>
  )
} ;

export default App;