
import { CustomForm } from "../composed-components/CustomForm";

export const FormSub = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center bg-gray-700 rounded-2xl mx-20 mt-10 overflow-hidden">
            <div className="flex justify-center items-center w-full h-full bg-gray-200">
                <img className="w-full h-full object-cover p-20" src="/mailbox.svg" alt="" />
            </div>
            <div className="flex justify-center items-center w-full">
                <CustomForm />
            </div>
        </div>
    );
};