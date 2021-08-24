import React from 'react'


const Header = () => {
    return (

        <header>
            <nav className="absolute left-0 right-0">
                <div className="container mx-auto px-6 py-3 ">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="flex justify-between items-center">
                            <a href="./" className="block">
                            <img className="" src="/anai.png" width="130" />
                                </a>
                            <div className="flex md:hidden">
                                <button type="button" className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-600" aria-label="toggle menu"></button>
                            </div>
                            </div>


                        <div className="hidden -mx-4 md:flex md:items-center font-sans-caption">
                            <a href="/onama" className="block mx-4 mt-2 md:mt-0 text-meduim text-white hover:text-gray-700">O nama</a>
                            <a href="/usluge" className="block mx-4 mt-2 md:mt-0 text-medium text-white hover:text-gray-700">Usluge</a>
                            <a href="/iskustvakorisnika" className="block mx-4 mt-2 text-medium md:mt-0 text-white hover:text-gray-700">Iskustva Korisnika</a>
                            <a href="/galerija" className="block mx-4 mt-2 md:mt-0 text-medium text-white hover:text-gray-700">Galerija</a>
                            <a href="/blog" className="block mx-4 mt-2 md:mt-0 text-medium text-white hover:text-gray-700">Blog</a>
                            <a href="/kontakt" className="block mx-4 mt-2 md:mt-0 text-medium text-white hover:text-gray-700">Kontakt</a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="w-full bg-cover bg-center" style={{ height: "54rem", backgroundImage: "url('./woman.jpg')" }}>
                <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                <link href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap" rel="stylesheet"/> 
                    <div className="text-right">
                      <h1 className="pb-96 pl-96 text-white text-6xl font-thin uppercase sans-serif" style={{fontFamily:"Gowun Dodum"}}>Add beauty to your life!</h1>
                    
                     </div>
                </div>
            </div>
        </header>
    )
}

export default Header;