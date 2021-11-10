import React from 'react';
import '../css/home.css';
import { NavLink } from 'react-router-dom';
// import '../image';

const Common = (props) => {
    return (
        <section id='header' className='d-flex align-items-center'>
            <div className='container-fluid d-flex'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
                                <h1>
                                    {props.name} <strong className='brand-name'>
                                        Chirag Padsala
                                    </strong>
                                </h1>
                                <h2 className='my-3'>
                                    we are the telented developer team for website
                                </h2>
                                <div className='mt-3'>
                                    <NavLink to={props.visit} className='btn-get-started'>{props.btnName}</NavLink>
                                </div>
                            </div>

                            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                <img src={props.imgsrc} className='img-fluid animated' alt='Common IMG' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Common
