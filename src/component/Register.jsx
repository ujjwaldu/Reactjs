import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [msg, setMsg] = useState('');
    const [bgColor, setBgColor] = useState('');

    const hanldler = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    }

    const savedata = (event) => {
        event.preventDefault();
        axios.post('http://35.154.52.249:5050/user/register', state)
            .then((response) => {
                if (response.data.acknowledged === "true") {
                    setBgColor('orange');
                } else {
                    setBgColor('red');
                }
                setMsg(response.data.message);
            })
            .catch((error) => {
                console.error('Error:', error.message);
            });
    }

  return (
        <>
            <div className="container">
            <form className='outbox'  onSubmit={savedata}>
            <div className="row">
                <div className="col-md-12 login">
                    Registration form
                </div>
            </div>
                <div className="row">
                    <div className="col-md-12 inspan">
                        <span className=''>Name</span>
                        <div><input className='input' onChange={hanldler} type="text" placeholder='Write your name' name='name' /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 inspan">
                        <span className=''>Email</span>
                        <div><input className='input' onChange={hanldler} type="email" placeholder='Write email' name='email'/></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 inspan">
                        <span className=''>password</span>
                        <div><input className='input' onChange={hanldler} type="password" placeholder='write password here' name='password'/></div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-md-12 inspan">
                        <span className=''>Number</span>
                        <div><input className='input' onChange={hanldler} type="number" placeholder='write your contact no.' name='number'/></div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-md-12">
                       <div><input className='btnlo' type="submit" value="Register" /></div>
                    </div>
                    {msg? <div className='alert alert-success' id='div' style={{marginTop:'1rem',backgroundColor:bgColor}}>{msg}</div>:''}
                </div>
                </form>
            </div>
        </>
  )
}
