import React from 'react';
import { useNavigate } from 'react-router-dom';
import video from './assets/flagvideo.mp4';
import lions from './assets/lions.jpg'

const HomePage = () => {
  const navigate=useNavigate();
  const handleButtonClick = () => {
    navigate('/login');
  };
  return (
    <div className="flex h-screen">

      <div className="w-1/2 bg-gray-200 relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <video className="absolute inset-0 object-cover w-full h-full" autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          
        </div>
      </div>

  
      <div className="w-1/2 bg-white  border-solid border-green-500  border-4 flex flex-col items-center gap-10 justify-center">
      <img src={lions}  alt="Indian-lions"  className='h-32 w-32 rounded-full shadow-xl border-solid border-yellow-500  border-4'/>
        <h2 className="text-5xl text-center mb-4  font-custom5 mt-12">Empowering Citizens: Learn About Government Schemes Today!</h2>
        <button onClick={handleButtonClick} className="bg-green-500 mt-8 hover:bg-green-700 text-white  py-2 px-4 rounded-full shadow-lg">
        <div className="flex gap-2">
         <p className='font-custom1 text text-2xl'>Try SchemeBot</p> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
</svg>
</div>


        </button>
    
      </div>
    </div>
  );
}

export default HomePage;

