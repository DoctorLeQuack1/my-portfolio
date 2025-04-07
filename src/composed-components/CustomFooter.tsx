



export const CustomFooter = () => {

    return (
    <div className=" bg-gray-700">
        <div className="container px-6 py-8 mx-auto">
            <div className="flex flex-col items-center text-center">
                
                <p className="max-w-md mx-auto mt-4 text-gray-200 dark:text-gray-200">This page was developed by Sergio Aguilar, with tons of love. ❤️</p>

            </div>

            <hr className="my-10 border-gray-200 dark:border-gray-200" />

            <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                <p className="text-sm text-gray-200">© Copyright 2021. All Rights Reserved.</p>

                <div className="flex mt-3 -mx-2 sm:mt-0">
                    <a href="#" className="mx-2 text-sm text-gray-200 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a>

                    <a href="#" className="mx-2 text-sm text-gray-200 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

                    <a href="#" className="mx-2 text-sm text-gray-200 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
                </div>
            </div>
        </div>
    </div>);
};