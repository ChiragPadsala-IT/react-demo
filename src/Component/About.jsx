import React from 'react';
import web from '../image/web_about.svg';
import Common from './Common';

const About = () => {
    return (
        <>
            <Common
                name='Welcome to About Page'
                imgsrc={web}
                visit='/contact'
                btnName='Contact Now'
            ></Common>
        </>
    )
}

export default About;
