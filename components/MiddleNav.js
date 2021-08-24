export default function MiddleNav() {
    return (


        <nav className="bg-gray-800 shadow dark:bg-gray-800 font-sans-caption ">
            <div className="text-center container px-5 py-24 mx-auto">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-white ">USLUGE KOJE NUDIMO</h1>
                <div className="flex justify-center">
                <div className="w-36 h-px rounded-full bg-gray-600 inline-flex"></div>
                </div>
                <p className="text-white pt-8 ">Samo najbolje za Vas!</p>
            </div>
            <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 dark:text-gray-300">
                <a href="#" className="text-white mx-1.5 sm:mx-6 hover:text-gray-400">Mikropigmentacija</a>

                <a href="#" className="text-white mx-1.5 sm:mx-6 hover:text-gray-400">Ekstenzije trepavica</a>

                <a href="#" className="text-white mx-1.5 sm:mx-6 hover:text-gray-400">Masaže</a>

                <a href="#" className="text-white mx-1.5 sm:mx-6 hover:text-gray-400">Depilacije</a>

                <a href="#" className="text-white mx-1.5 sm:mx-6 hover:text-gray-400">Tretmani lica</a>

                <a href="#" className="text-white mx-1.5 sm:mx-6 hover:text-gray-400">Njega noktiju</a>

            </div>


        <div class="container grid grid-cols-3 mx-auto gap-0 px-20 space-x-0">
            
            <div class="w-full rounded">
                <img src="./saloon1.png"/>
            </div>

            

            <div class="w-full rounded">
            <img src="./eye1.png"/>
            </div>

            <div class="w-full rounded">
            <img src="./saloon1.png"/>
            </div>

            <div class="w-full rounded">
            <img src="./face1.png"/>
            </div>

            <div class="w-full rounded">
            <img src="./massage1.png"/>
            </div>

            <div class="w-full rounded">
            <img src="./saloon1.png"/>
            </div>


        </div>

            


            


        </nav>


    )
}