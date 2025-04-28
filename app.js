
import React from 'react';
import ReactDOM from 'react-dom/client';
import FoodLogo from './assets/Food-Logo.png';

const Header=()=>{
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={FoodLogo}></img>
            </div>
            <div className='nav-iteams'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>
                
            </div>
        </div>
    )
};

const AppLayout=()=>{
    return(
        <div className='app-layout'>
            <Header/>
        </div>
    )
};
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);