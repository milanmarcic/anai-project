import React from 'react';
import { useForm } from "react-hook-form";

export default function Footer() {


  const { register, formState: { errors }, handleSubmit } = useForm();
 
  const onSubmit = (data, e) => console.log(data, e);
  

  return (
    <section className="text-gray-600 body-font relative font-sans-caption " style={{ backgroundImage: "url('./footer.jpg')" }}>
      <div className="container px-10 mx-auto">
        <div className="flex flex-col text-center w-full ">
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-transparent flex flex-col w-full md:py-8 mt-8 md:mt-0 pl-12">

          <h1 className="text-white sm:text-3xl text-2xl font-medium title-font mb-4 text-center">Kontaktirajte nas</h1>
          <div className="flex justify-center">
            <div className="w-screen h-px rounded-full bg-gray-600 inline-flex"></div>
          </div>

          <div className="flex flex-col float-right text-center items-center pr-44" style={{ position: "absolute", right: "0" }}>
            <h2 className=" text-white sm:text-3xl text-2xl font-medium title-font mb-4 text-center ">Povežite se sa nama</h2>
            <div className="flex justify-center">
              <div className="w-80 h-px rounded-full bg-gray-600 inline-flex"></div>
            </div>
            <div className="flex sm:justify-center xl:justify-start flex space-x-4 pt-8">
              <a href="" className="w-8 h-8  rounded-full text-center py-1 ">
                <img alt="team" src="./twitter-icon.svg" />
              </a>
              <a href="" className="w-8 h-8  rounded-full text-center py-1 ">
                <img alt="team" src="./facebook.svg" />
              </a>
              <a href="" className="w-8 h-8  rounded-full text-center py-1">
                <img alt="team" src="./google.svg" />
              </a>
              <div className="text-white pt-20 space-y-6 " style={{ position: "absolute", left: "0" }}>
                <div >ADRESA: Trg Kneza Višeslava 6, Zadar</div>
                <div >TELEFON: 023 311 543</div>
                <div >E-MAIL: elvira.pesa1@gmail.com</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mb-4 pt-8 text-red-500">
          <input {...register("firstAndLastName", { required: true })} type="text" placeholder="Ime i prezime" className="w-full bg-transparent rounded border border-gray-300 focus:border-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          {errors.firstAndLastName?.type === 'required' && "Molimo unesite ime i prezime"}
          </div>
          <div className="relative mb-4 text-red-500">
            <input  {...register("eMail", { required: true })} type="text" placeholder="E-mail" name="email" className="w-full bg-transparent rounded border border-white focus:border-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.eMail?.type === 'required' && "Molimo unesite e-mail adresu"}
          </div>
          <div className="relative mb-4 text-red-500">
            <textarea   {...register("message", { required: true })} type="text" name="message" placeholder="Poruka" className="w-full bg-transparent rounded border border-white focus:border-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            {errors.message?.type === 'required' && "Unesite poruku"}
          </div>
          <div className="flex items-center ">
            <button type="submit" className="bg-red-500 text-white rounded px-6 py-2 font-medium  hover:bg-red-600 transition duration-200 each-in-out"
            >
              POŠALJI
            </button>
           
          </div>
          </form>
        </div>
      </div>
    </section>
  )

}



