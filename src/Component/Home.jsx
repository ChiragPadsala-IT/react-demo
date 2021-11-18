import React from 'react';
import web from '../image/web_home.svg';
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common
                name='Learn React with'
                imgsrc={web}
                visit='https://reactjs.org/'
                btnName='Get Started'
            ></Common>
        </>
    )
}

export default Home
