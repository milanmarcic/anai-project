import React from 'react'

export default function Banner({ ...props }) {
  return (
    <div>
      <div className="text-center bg-gray-700 font-sans-caption  flex flex-col p-4 md:text-left md:flex-row md:items-center md:justify-between md:p-12 ">
        <div className="text-3x1 font-medium">
          <div className="text-white text-5x1 pl-8 ">{props.text}</div>
        </div>

        <div className="mt-3 md:mt-0 md:ml-2 pr-20">
          <button className="bg-red-500 text-white px-6 py-2 font-medium mx-3 rounded hover:bg-red-600 transition duration-200 each-in-out"
            onClick={() => {
              window.open("http://google.com", "Popup")
            }}>
            <i className="fas fa-user"></i> {props.buttonText}
          </button>
        </div>
      </div>
    </div>

  )
}
