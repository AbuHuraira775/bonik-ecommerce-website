import React, { useState } from 'react';
import { Link,BrowserRouter as Router } from 'react-router-dom/';

function Navbar() {

    const [MobileMenu,setMobileMenu] = useState(false)
    return (
        <>
        <header className='header'>
            <div className="container d_flex">
                <div className="catagories d_flex">
                    <span className='fa-solid fa-border-all'></span>
                    <h4>Catagories <i className='fa fa-chevron-down'></i></h4>
                </div>

                <div className="navlink">
                    <Router>
                    <ul className={MobileMenu? "nav-links-MobileMenu": "link f_flex capitalize"} onClick={()=>setMobileMenu(false)}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/pages">Pages</Link></li>
                        <li><Link to="/user">User Account</Link></li>
                        <li><Link to="/vendor">Vendor Account</Link></li>
                        <li><Link to="/track">Track my Order</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    </Router>

                    <button className='toggle' onClick={()=>{setMobileMenu(!MobileMenu)}}>
                        {MobileMenu ?
                        <i className='fas fa-times close home-btn'> </i>:
                        <i className="fa-solid fa-bars open"></i>}
                    </button>
                </div>
            </div>

        </header>
        </>
    );
}

export default Navbar;