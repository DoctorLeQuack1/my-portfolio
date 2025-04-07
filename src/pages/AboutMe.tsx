export const AboutMe = () => {
    return (
        <div className="grid grid-col-1 lg:grid-cols-2 w-full">
            <div className="flex flex-col justify-center items-center lg:items-baseline mx-20">
                <h1 className="text-7xl text-gray-600 pb-5">Hi, I am Sergio Aguilar,</h1>
                <p className="text-2xl text-gray-600">I am a Sr. Software Engineer with 4 years of experience,</p>
                <p className="text-2xl text-gray-600 pb-5">passionate about learning and always eager to face new challenges.</p>
                <div className="flex flex-row gap-1 justify-start">
                    <p className="text-xl text-gray-600">Check some of the work I have done:</p>
                    <a href="https://github.com/DoctorLeQuack1" target="_blank" rel="noopener noreferrer"><img className="max-h-[30px] max-w-[30px]" src="/github-mark.svg" /></a>
                </div>
            </div>
            <div className="flex justify-center lg:justify-end lg:mr-20">
                <img className="w-full max-w-md h-auto object-contain" src="/avatar.png" alt="" />
            </div>
        </div>
    );
};