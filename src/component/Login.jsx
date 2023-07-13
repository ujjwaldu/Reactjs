import React from 'react'

export default function Login() {
  return (
        <>
            <div className="container">
            <form className='outbox' align='center'>
            <div className="row">
                <div className="col-md-12">
                    login
                </div>
            </div>
                <div className="row">
                    <div className="col-md-12">
                        <span>Name</span>
                        <div><input type="text" placeholder='Write your name' /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <span>username</span>
                        <div><input type="text" placeholder='Write a username' /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <span>Email</span>
                        <div><input type="email" placeholder='Write email' /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <span>password</span>
                        <div><input type="password" placeholder='write password here' /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                       <div><input type="submit" value="login" /></div>
                    </div>
                </div>
                </form>
            </div>
        </>
  )
}
