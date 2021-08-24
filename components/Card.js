import useFetch from '../hooks/useFetch';
import React from 'react'

export default function Card() {

  const { loading, error, data } = useFetch('http://localhost:1337/cardpages')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>


  return (
    <section >
     <div className="w-full bg-cover bg-center bg-gray-900 font-sans-caption" style={{ height: "54rem", backgroundImage: "url('./spa.jpg')" }}>
        <div className="flex items-center h-full w-full bg-gray-900 bg-opacity-75">
         {data.map(cardpage => (
            <div key={cardpage.id} className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="inline-flex items-center justify-center text-indigo-500 mb-5 flex-shrink-0">
                <img src={'http://localhost:1337' + cardpage.logo.url} />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font mb-3 title">{cardpage.title}</h2>
                <p className="text-white description">{cardpage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}