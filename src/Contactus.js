import React from 'react';
import flagbg from './assets/flagbgm.jpg'; 

const ContactUs = () => {
  const companyEmail = 'info@example.com';
  const phoneNumber = '+91 8683952711';

  return (
    <div className="bg-cover bg-repeat  min-h-screen relative flex items-center justify-center" style={{backgroundImage:`url(${flagbg})`}}> 
      <div className="container mx-auto font-custom1 mt-32 font-normal">
        <div className="max-w-2xl mx-auto p-8 rounded-md text-center">
          <h2 className="text-3xl text-black  mb-4 mt-12">Get in Touch</h2>
          <p className="text-black mb-8 font-custom4 text-3xl">
            "Maximizing awareness on government schemes by SchemeBot"
          </p>
          <p className="text-lg text-black font-custom1 font-semibold mb-2">Connect with us:</p>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <a
              href={`mailto:${companyEmail}`}
              className="text-blue-500 hover:underline"
            >
              Email: support@schemebot.com
            </a>
            <span className="text-white">|</span>
            <span className="text-blue-500">{phoneNumber}</span>
          </div>
          <p className="text-black">
            Got questions or feedback about SchemeBot? We're here to help!
            Feel free to drop us an email anytime. We'll get back to you as soon as possible.
          </p>
          <p className='text-xl font-custom5 mt-4'>"In the Heart of Every Satisfied Citizen Lies the Foundation of a Stronger Nation"</p>
          <img  src="https://thumbs.dreamstime.com/b/happy-indian-family-agricultural-field-farmer-203859114.jpg" alt='farmerfamily' / >
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
