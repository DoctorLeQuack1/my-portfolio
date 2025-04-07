import { useState } from "react";
import { CustomButton } from "../base-components/CustomButton";

export const CustomForm = () => {
    // Estados para los inputs
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    // Función para limpiar los inputs
    const handleClear = () => {
        console.log("Button clicked");
        setName("");
        setMessage("");
    };

    return (
        <div className="flex flex-col justify-start items-start border-2 border-gray-600 rounded-md w-full max-w-lg p-5 gap-5">
            <div className="flex flex-col w-full max-w-md">
                <p className="text-xl font-bold text-gray-600 text-left">Enter Your Name</p>
                <input
                    className="text-gray-600 border-gray-500 hover:border-gray-600 focus:outline-none focus:ring-gray-600 focus:border-gray-600 border-2 rounded-md w-full max-w-sm min-h-[40px]"
                    type="text"
                    value={name} // Controlado por el estado
                    onChange={(e) => setName(e.target.value)} // Actualiza el estado
                />
            </div>
            <div className="flex flex-col w-full max-w-md">
                <p className="text-xl font-bold text-gray-600 text-left">Enter Message</p>
                <textarea
                    className="text-gray-600 border-gray-500 hover:border-gray-600 focus:outline-none focus:ring-gray-600 focus:border-gray-600 border-2 rounded-md w-full max-w-sm min-h-[100px]"
                    value={message} // Controlado por el estado
                    onChange={(e) => setMessage(e.target.value)} // Actualiza el estado
                />
            </div>
            <CustomButton text="Reach Out" onClick={handleClear} /> {/* Ahora pasamos onClick correctamente */}
        </div>
    );
};