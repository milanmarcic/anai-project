import React from 'react';
import { useForm } from "react-hook-form";

export default function Kontakt() {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data, e) => console.log(data, e);


  return (
  <section className="text-gray-600 body-font font-sans-caption relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Trg%20Kneza%20Vi%C5%A1eslava%206,Zadar+(My%20Business%20Name)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{ width: "100%", height: "100%", filter: "grayscale(100%)" }} ></iframe>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-gray-600 rounded p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md font-sans-caption">
            <h2 className="text-white text-lg mb-1 font-medium title-font text-center font-sans-caption">Kontaktirajte nas</h2>

            <div className="relative mb-4 text-red-600">
              <label className="leading-7 text-sm text-white">Ime i prezime</label>
              <input {...register("firstAndLastName", { required: true })} type="text" className="w-full bg-white rounded border border-gray-600 focus:border-gray-700 focus:ring-2 focus:ring-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              {errors.firstAndLastName?.type === 'required' && "Molimo unesite ime i prezime"}
            </div>
            <div className="relative mb-4 text-red-600">
              <label {...register("eMail", { required: true })} type="text" className="leading-7 text-sm text-white">E-mail</label>
              <input className=" w-full bg-white rounded border border-gray-600  focus:ring-2 focus:ring-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              {errors.eMail?.type === 'required' && "Molimo unesite e-mail"}
            </div>
            <div className="relative mb-4 text-red-600">
              <label className="leading-7 text-sm text-white">Poruka</label>
              <textarea  {...register("message", { required: true })} type="text" className="w-full bg-white rounded border border-gray-600 focus:ring-gray-300 focus:ring-2 focus:ring-gray-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              {errors.message?.type === 'required' && "Molimo unesite poruku"}
            </div>
            <button type="submit" className="bg-red-500 rounded w-1/3 text-white px-6 py-2 font-medium  hover:bg-red-600 transition duration-200 each-in-out">POŠALJI</button>

          </div>
        </div>
      </form>
    </section>
  )
}