import React from 'react';
import web from '../image/web_home.svg';
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common
                name='Grow your business with'
                imgsrc={web}
                visit='/service'
                btnName='Get Started'
            ></Common>
        </>
    )
}

export default Home
