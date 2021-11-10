import React from 'react'
import Card from './Card'
import { Sdata } from '../data/teampData.js';
import database_dev from '../image/database_dev.jpg';

const Service = () => {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Our Services</h1>
            </div>
            <div className='container-fluid mb-5 mx-auto'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                            {
                                Sdata.map(
                                    (e, index) => {
                                        return <Card
                                            key={index}
                                            title={e.title}
                                            imgsrc={e.image}
                                        ></Card>
                                    }
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
