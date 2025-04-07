import { CustomButton } from "../base-components/CustomButton";

export const ProjectCard = (props: any) => {

    const handleClick = () => { };

    return (
        <div className="grid grid-cols-1 grid-rows-1 border-2 rounded-xl border-gray-600 w-full h-full max-w-md overflow-hidden">
            <div className="w-full h-full pb-10">
                <img className="w-full h-full object-cover" src={props.object.img_} alt="" />
            </div>

            <div className="self-center pb-10">
                <p className="text-2xl text-gray-600 text-center">{props.object.title_}</p>
            </div>

            <div className="self-center pb-10">
                <p className="text-2xl text-gray-600 text-center">{props.object.description_}</p>
            </div>

            <div className="text-center pb-10">
                <CustomButton text={"GitHub Repo"} onClick={handleClick} />
            </div>
        </div>
    );
};