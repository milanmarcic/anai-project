import useFetch from '../hooks/useFetch';
import React from 'react'

export default function Testemonial() {

 const { loading, error, data } = useFetch('http://localhost:1337/iskustva-korisnikas')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>



  return (
    <section className="text-gray-600 body-font font-sans-caption bg-gray-100">
      <div className="container px-5 py-24 mx-auto">
      {data.map(iskustvakorisnikas => (
        <div key={iskustvakorisnikas.id} className="text-center mb-20 ">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600">{iskustvakorisnikas.title}</h1>
          <div className="flex justify-center">
        <div className="w-48 h-px rounded-full bg-gray-300 inline-flex"></div>
      </div>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s pt-8">{iskustvakorisnikas.description}</p>
          <div className="flex mt-6 justify-center"/>
        </div>
      ))}
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow">
              <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p> 
            </div>
             
         <div className="h-full flex items-center p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./ana.jpg"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Ana Jurić</h2>
            <p className="text-gray-500">Zadovoljni kupac</p>
          </div>
          </div>
          
          </div>
         
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow">
              <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p> 
            </div>
             
         <div className="h-full flex items-center p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./ivan.jpg"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Ivan Matić</h2>
            <p className="text-gray-500">Zadovoljni kupac</p>
          </div>
          </div>
         </div>
          
          
         
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow">
              <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p> 
            </div>
             
         <div className="h-full flex items-center p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./iva.jpg"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Iva Radoš</h2>
            <p className="text-gray-500">Zadovoljni kupac</p>
          </div>
          </div>
          
          </div>
          </div>
        </div>

      
    </section>

  )
}