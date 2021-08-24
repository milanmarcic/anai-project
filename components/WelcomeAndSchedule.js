import React from 'react'

export default function WelcomeAndSchedule() {
  return (

    <section className="text-gray-600 body-font">
      
      <div className="container px-5 py-24 mx-auto">
        
        <div className="text-center mb-20">
        <link href="https://fonts.googleapis.com/css2?family=Parisienne&family=Sacramento&display=swap" rel="stylesheet"/> 
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600 mb-4 " style={{fontFamily:"Parisienne", fontSize:"70px", textShadow:"4px 4px 4px #aaa"}}>Dobrodošli!</h1>
        </div>
        
        
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 font-sans-caption ">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div/>
            <div className="tabela radnog vrijemena">
              <div>
                <h1 className="pb-8 font-bold uppercase">Radno Vrijeme</h1>
              </div>

              <table>

                <tbody>
                  <tr>
                    
                    <td className="weekday" style={{paddingRight: "75px"}}>Ponedjeljak</td>
                    <td className="id" >09-17h </td>
                  </tr>
                  <tr>
                    <td className="week-day"style={{textAlign:"left"}}>Utorak</td>
                    <td className="id">09-17h</td>
                  </tr>
                  <tr>
                    <td className="week-day"style={{textAlign:"left"}}>Srijeda</td>
                    <td className="id">09-17h</td>
                  </tr>
                  <tr>
                    <td className="week-day"style={{textAlign:"left"}}>Četvrtak</td>
                    <td className="id">09-17h</td>
                  </tr>
                  <tr>
                    <td className="week-day"style={{textAlign:"left"}}>Petak</td>
                    <td className="id">09-17h</td>
                  </tr>
                  <tr>
                    <td className="week-day"style={{textAlign:"left"}}>Subota</td>
                    <td className="id">09-13h</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>



          <div className="p-4 md:w-1/3 flex flex-col text-center items-center pl-80">
            <div className="w-60 h-60 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
              <img src="./youngwoman.png" alt="..." className="rounded-full " />
              <img src="./originaleye.jpg" alt="..." className="rounded-full " />
              <img src="./youngwoman2.png" alt="..." className=" rounded-full " />
            </div>

          </div>
        </div>

      </div>
    </section>






  )
}