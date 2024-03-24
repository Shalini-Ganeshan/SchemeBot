import React, { useState } from 'react'
import {Link } from "react-router-dom";
import { useUserAuth } from './context/UserAuthContext';
import flagbg from './assets/flagbgm.jpg'; 
const Signup = () => {
 
  const [email,setEmail]=useState("")
  const [error,setError]=useState("")
  const [password,setPassword]=useState("")
  const {signUp} =useUserAuth();
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setError("");
    try{
      await signUp(email,password);
      window.location.href = 'http://127.0.0.1:5500/SchemeBot/schemebot/Chat.html';

    }
    catch(err){
      setError(err.message);
    }

  }
  return  (
    <div className="bg-cover bg-center h-screen relative flex items-center justify-center" style={{backgroundImage:`url(${flagbg})`}}>
    <div className="max-w-md mx-auto  border-solid  border-4 border-green-500 mt-8 p-6 bg-white bg-opacity-70 rounded-md shadow-md text-black font-custom1">
      <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
      {error && (<div className='text-black bg-orange-600 p-2 mb-4 rounded-md'>{error}</div>)}
      <form onSubmit={handleSubmit}>
       
        <div className="mb-4">
          <label htmlFor="email" className="text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md bg-green-500 bg-opacity-20 focus:outline-none focus:border-green-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"

            onChange={(e)=>setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md bg-green-500 bg-opacity-20  focus:outline-none focus:border-green-500"
            required
          />
        </div>

     
        <button
          type="submit"
          className="w-full bg-green-500 bg-opacity-20 text-black py-2 rounded-md  hover:bg-green-500  focus:outline-none focus:shadow-outline-purple"
        >
          Sign Up
        </button>
      </form>


      <div className="mt-4 text-center">
        <p>
          Already have an account?{' '}
         <Link to="/login"><p className='hover:underline text-black'> Log in</p>
           
          </Link>
        </p>
      </div>
    </div>
    <div className="fixed bottom-0 right-0 mb-4 mr-4">
      <Link to="/contactus">
        <button className="hover:bg-gray-200 flex gap-2 bg-white border-2 border-black  text-white font-bold py-3 px-6 rounded-full">
        <p className='text-green-600 font-custom5 text-xl'>Contact Us</p>
        <img src="https://cdn4.iconfinder.com/data/icons/logistics-30/33/support-256.png" className='w-8 h-8' alt="contact us" />
        </button>
      </Link>
    </div>
    </div>
  );
};

export default Signup