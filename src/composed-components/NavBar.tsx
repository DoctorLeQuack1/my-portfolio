
export const NavBar = () => {

    return(

        <div className="flex flex-row flex-wrap justify-between items-center py-5 px-10">

            <img src="/astronaut.png" className="w-full h-full max-w-28 max-h-28" />
            <div className="flex flex-row justify-center items-center gap-10">
                <a className="text-2xl text-gray-600 hover:text-gray-400 font-bold" href="">About Me</a>
                <a className="text-2xl text-gray-600 hover:text-gray-400 font-bold" href="">Portfolio</a>
                <a className="text-2xl text-gray-600 hover:text-gray-400 font-bold" href="">Contact</a>
                <a className="text-2xl text-gray-600 hover:text-gray-400 font-bold" href="">Resume</a>
            </div>

        </div>
        
    );

};