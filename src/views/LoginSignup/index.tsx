"use client"

import { signIn } from 'next-auth/react';
import style from './loginsignup.module.css'
import { useRef, useState } from 'react';

const LoginSignupView = () => {


    const [Email, setInputEmail] = useState('');
    const [Password, setInputPassword] = useState('');

    const getEmail = (event :any) => {
        // console.log(event.target.value);
        setInputEmail(event.target.value);
    };

    const getPassword = (event :any) => {
        setInputPassword(event.target.value);
    }


    console.log(Email + Password)


    
    const onSubmit = async ()=>{
        console.log(1);
        console.log(Email);
        console.log(Password);
        const data = await signIn("credentials",{
            Email,
            Password,
            redirect:true,
            callbackUrl:"/"
        })
        console.log(data);
    }
return (
    
    <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
        <div className={style.koten_login}>
        <div className="judul p-5 text-center">
            <div className={style.judulUtama}>
                .Fashionist4
            </div>
            <div className={style.tagline}>
                Style Redefined: Where Fashion Meets Imagination
            </div>
        </div>
        <div className="row loginSignupsegment">
            <div className="col">
                <img src="/images/LoginSignupGif/fashion_shop.gif" alt="Infinite Animation" className={`img-fluid ${style.gif}`}/>
            </div>
            <div className={`col d-flex justify-content-center align-items-center ${style.kontenForm}`}>
                <div className={`${style.form}`}>
                    <form>
                        <div className={`text-center ${style.login} mb-4`}>
                            Login Form
                        </div>
                        <div className={`${style.formInput} mb-4`}>
                            <input type="email" className={`form-control ${style.form_control}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Input your email' onChange={getPassword}>
                            </input>
                            <div className={`${style.label}`}>
                                Email
                            </div>
                            <div className={`${style.icons}`}>
                            <i className="bi bi-envelope-at"></i>
                            </div>
                        </div>
                        <div className={`${style.formInput} mb-4`}>
                            <input type="password" className={`form-control ${style.form_control}`} id="exampleInputPassword1" placeholder='Input your password' onChange={getEmail}></input>
                            <div className={`${style.label}`}>
                                Password
                            </div>
                            {/* <div className={`${style.icons}`}> */}
                            <i className={`bi bi-0-circle ${style.icons}`}></i>
                            {/* </div> */}
                        </div>
                        <button className={style.buttonLogin} onClick={onSubmit}>Submit</button>

                        <div className={style.text}>
                            <p className='mx-1'>
                                Create new account,  
                            </p>
                            {/* <a className={style.register} onClick={() => signIn()}>Register</a> */}
                            <button onClick={()=>signIn}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
);
}

export default LoginSignupView;