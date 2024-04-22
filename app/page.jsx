"use client"
import React from 'react';
import '../styles/globals.css';


// Define Home component
const Home = () => {
    const register = () => {
        // Your registration logic goes here
        console.log('Register button clicked');
    };

    return (
        <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center'> Welcome </h1>
            <span className='blue_gradient text-center'> Artist? Looking for collaborations? Join us </span>
            <p className='desc text-center'> Connect with fellow artists, share ideas, and collaborate on projects across various artistic disciplines. Join to bring imagination to life!</p>
        
        {/* Assuming Feed is another component you want to include */}
         {/* Adding the Login component */}
            <form  action="/" className="login-container" id="login" method="post" >
                <div className="top">
                    <span>New to our website? <a href="#" onClick={register}>Create Account</a></span>
                    <header>Member Login</header>
                </div>
                <div className="input-box">
                    <input name="email" type="text" className="input-field" placeholder="Email Address" />
                    <i className="bx bx-envelope"></i>
                </div>
                <div className="input-box">
                    <input  name="password" type="password" className="input-field" placeholder="Enter Password" />
                    <i className="bx bx-key"></i>
                </div>
                <div className="input-box">
                    <input type="submit" className="submit" value="Log In" />
                </div>
                <div className="two-col">
                    <div className="one">
                        <input type="checkbox" id="login-check" />
                        <label htmlFor="login-check"> Keep me logged in</label>
                    </div>
                    <div className="two">
                        <label><a href="#">Reset password?</a></label>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Home;


