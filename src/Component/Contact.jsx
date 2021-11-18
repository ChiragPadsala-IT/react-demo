import React, { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        message: ''
    });

    const formSubmit = (event) => {
        event.preventDefault();
        alert(`My Name : ${data.fullName} \n Mobile No : ${data.phoneNumber} \n Email : ${data.email} \n Message : ${data.message}`);
    }
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    }

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>contact</h1>
            </div>
            <div className='container contact_div'>
                <div className="row">
                    <div className='col-md-6 con-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"
                                    name='fullName'
                                    value={data.fullName}
                                    onChange={inputEvent}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Contact</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Contact Number"
                                    name='phoneNumber'
                                    value={data.phoneNumber}
                                    onChange={inputEvent}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com"
                                    name='email'
                                    value={data.email}
                                    onChange={inputEvent}
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1"
                                    rows="3"
                                    name='message'
                                    value={data.message}
                                    onChange={inputEvent}></textarea>
                            </div>
                            <div className='col-12'>
                                <button type='submit' class="btn btn-outline-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
