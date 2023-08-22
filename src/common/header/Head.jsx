import React from 'react';
import './Header.css'

function Head() {
    return (
        <>
            <section className='head'>
                <div className="container d_flex">
                    <div className="left row">
                        <i className='fa fa-phone'></i>
                        <label >+92 313 2680481</label>
                        <i className="fa fa-envelope"></i>
                        <label>abuhurairah775@gmail.com</label>
                    </div>

                    <di className="right row RText">
                        <label>Theme FAQ's</label>
                        <label>Need Helps</label>
                        <label>USA</label>
                        <label>USD</label>
                    </di>
                </div>

            </section>
        </>
    );
}

export default Head;