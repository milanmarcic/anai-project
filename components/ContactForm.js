import React from 'react';

import DateCheck from './DateCheck'


export default function ContactForm() {
    return (
      
      
         <div className="w-full bg-cover bg-center bg-gray-900 font-sans-caption " style={{ height: "54rem" ,backgroundImage: "url('./sportwoman.jpg')"}}>
         <div className="flex items-center h-full w-full bg-gray-900 bg-opacity-75">
        
        <div className="flex flex-col w-full mb-20 pl-60 pb-40">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white text-center pl-16 pr-44">Dogovori besplatne konsultacije jos danas!</h1>
          <p className="lg:w-2/3 mx-auto text-white text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        
        <div className="flex flex-wrap" style={{ position: "absolute", left: "30%" }}>
        <div className="pl-12 text-center pr-44 "><DateCheck /> </div>
          
        </div>
        </div>

        
      </div>
      
 
    
    )
}
