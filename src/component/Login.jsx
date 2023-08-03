import { useState } from 'react'  //12th vdo of rajiv sir and to replace api given by mishra mama
import axios from 'axios'
export default function Login() {
    const [state, setstate] = useState({
        name:'',
        username:'',
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
        axios.post('https://www.haveinlist.com/api/register.php',state) 
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
                <div className="row">
                    <div className="col-md-12 inspan">
                        <span className=''>Name</span>
                        <div><input className='input' onChange={hanldler} type="text" placeholder='Write your name' name='name' /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 inspan">
                        <span className=''>username</span>
                        <div><input className='input' onChange={hanldler} type="text" placeholder='Write a username' name='username' /></div>
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
                <div className="row">
                    <div className="col-md-12">
                       <div><input className='btnlo' type="submit" value="login" /></div>
                    </div>
                    {msg? <div className='alert alert-success'>{msg}</div>:''}
                </div>
                </form>
            </div>
        </>
  )
}
