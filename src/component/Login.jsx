import { useState } from 'react'  //12th vdo of rajiv sir and to replace api given by mishra mama
import axios from 'axios'
export default function Login() {
    const [state, setstate] = useState({
        email:'',
        password:''
    })
    const [msg,setmsg]=useState('')
    const hanldler=(event)=>{
        const {name, value}=event.target
        setstate({...state,[name]:value})
    }

    const savedata=(event)=>{
        event.preventDefault();
        axios.post('http://35.154.52.249:5050/user/login',state) 
        .then((res)=>{
            console.log(res);
            setmsg('data sent')
        })       
    }

  return (
        <>
            <div className="container">
            <form className='outbox'  onSubmit={savedata}>
            <div className="row">
                <div className="col-md-12 login">
                    login form
                </div>
            </div>
                
                {/* <div className="row">
                    <div className="col-md-12 inspan">
                        <span className=''>username</span>
                        <div><input className='input' onChange={hanldler} type="text" placeholder='Write a username' name='username' /></div>
                    </div>
                </div> */}
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
                <div className="row">
                    <div className="col-md-12">
                       <div><input className='btnlo' type="submit" value="login" /></div>
                    </div>
                    {msg? <div className='alert alert-success' style={{marginTop:'1rem',backgroundColor:'orange'}}>{msg}</div>:''}
                </div>
                </form>
            </div>
        </>
  )
}
