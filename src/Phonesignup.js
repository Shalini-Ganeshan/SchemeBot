import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import { Link } from 'react-router-dom';
import flagbg from './assets/flagbgm.jpg'; 
import { useUserAuth } from './context/UserAuthContext';
const Phonesignup = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");


  const [result, setResult] = useState("");
  const { setUpRecaptcha } = useUserAuth();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptcha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      window.location.href = 'http://127.0.0.1:5500/SchemeBot/schemebot/Chat.html';
      console.log("result:", result);
      console.log("otp:", otp);

    } catch (err) {
      setError(err.message);
    }
  };
  return (
     <>
      <div className="bg-cover bg-center h-screen relative flex items-center justify-center" style={{backgroundImage:`url(${flagbg})`}}>
    <div className="max-w-md mx-auto mt-[-4rem] p-6 bg-white bg-opacity-70 rounded-md border-solid  border-4 border-green-500 shadow-md text-black">
<h2 className="text-2xl text-black mb-6 font-custom1">Sign up with phone number</h2>
{error && <h1 className='text-red-600 text-center mb-4 font-custom1'>{error}</h1>}
<form onSubmit={getOtp} style={{display:!flag?"block":"none"}}>

  <div className="mb-4">
   <PhoneInput 
   className='text-bold'
    defaultCountry="IN"
    value={number}
    onChange={setNumber}
    placeholder="Enter phone number"
   />
   <div id="recaptcha-container" className='mt-4'/>
  </div>  
  <div className='space-x-5  mx-auto'>
  <Link to="/login"> <button className='text-black font-custom1  '>
    Cancel
  </button>
  </Link>
 
  <button type='submit'  className='text-black font-custom1'>
    Send OTP
  </button>
  </div>
  </form>
  <div>
<form onSubmit={verifyOtp} style={{display:flag?"block":"none"}}>

  <div><input 
  type="text"
  placeholder="Enter OTP"
  onChange={(e) => setOtp(e.target.value)} /></div>
   
  <div className='space-x-5 mt-4'>
  <Link to="/login">
  <button className=' text-white'>
    Cancel
  </button>
  </Link>
 
  <button type='submit' className=' text-white'>
    Verify OTP
  </button>
  </div>

  </form></div>
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
  </>

  )
}
export default Phonesignup;