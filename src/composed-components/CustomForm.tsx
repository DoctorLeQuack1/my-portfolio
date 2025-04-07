import { useState } from "react";
import { CustomButton } from "../base-components/CustomButton";

export const CustomForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Función para validar los inputs
    const validateForm = () => {
        if (name.length < 3) {
            alert("Name must be at least 3 characters long.");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Invalid email format.");
            return false;
        }
        if (message.length < 10) {
            alert("Message must be at least 10 characters long.");
            return false;
        }
        return true;
    };

    // Función para manejar el envío del formulario
    const handleSubmit = () => {
        if (validateForm()) {
            alert("Form submitted successfully! 🎉");
            setName("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <div className="flex flex-col justify-start items-start border-2 bg-white border-gray-300 rounded-md w-full max-w-lg p-5 gap-5">
            <div className="flex flex-col w-full max-w-md">
                <p className="text-xl font-bold text-gray-600 text-left">Enter Your Name</p>
                <input
                    className="text-gray-600 border-gray-500 hover:border-gray-600 focus:outline-none focus:ring-gray-600 focus:border-gray-600 border-2 rounded-md w-full max-w-sm min-h-[40px]"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="flex flex-col w-full max-w-md">
                <p className="text-xl font-bold text-gray-600 text-left">Enter Your Email</p>
                <input
                    className="text-gray-600 border-gray-500 hover:border-gray-600 focus:outline-none focus:ring-gray-600 focus:border-gray-600 border-2 rounded-md w-full max-w-sm min-h-[40px]"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="flex flex-col w-full max-w-md">
                <p className="text-xl font-bold text-gray-600 text-left">Enter Message</p>
                <textarea
                    className="text-gray-600 border-gray-500 hover:border-gray-600 focus:outline-none focus:ring-gray-600 focus:border-gray-600 border-2 rounded-md w-full max-w-sm min-h-[100px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <CustomButton text="Reach Out" onClick={handleSubmit} />
        </div>
    );
};