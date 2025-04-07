import { Link } from "react-router-dom";

export const NavBar = () => {

    return(

        <div className="flex flex-row flex-wrap justify-between items-center py-5 px-10">

            <img src="/astronaut.png" className="w-full h-full max-w-28 max-h-28" />
            <div className="flex flex-row justify-center items-center gap-10">
                <Link className="text-2xl text-gray-600 hover:text-gray-400 font-bold" to="/">About Me</Link>
                <Link className="text-2xl text-gray-600 hover:text-gray-400 font-bold" to="/portfolio">Portfolio</Link>
                <Link className="text-2xl text-gray-600 hover:text-gray-400 font-bold" to="/form">Contact</Link>
                <a className="text-2xl text-gray-600 hover:text-gray-400 font-bold" href="https://github.com/DoctorLeQuack1/my-resume/blob/main/SergioResume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>

        </div>
        
    );

};