export const CustomButton = (props: { text: string; onClick: () => void }) => {
    return (
        <button
            type="button"
            className="bg-gray-200 hover:bg-gray-600 text-gray-600 hover:text-gray-200 font-bold py-2 px-10 rounded-full"
            onClick={props.onClick} // Aquí pasamos el onClick
        >
            {props.text}
        </button>
    );
};