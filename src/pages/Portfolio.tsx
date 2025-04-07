import { ProjectCard } from "../composed-components/ProjectCard";

const card_struct: any = {

    vehicle: {
        img_: "/vehicle.jpg",
        title_: "Vehicle Manager",
        description_: "Inquierer app that allows creation and management of car inventory DB."
    },
    tracker: {
        img_: "/tracker.jpg",
        title_: "Employee Tracker",
        description_: "Inquierer app that allows creation and management of employee DB."
    },
    readMe: {
        img_: "/readme.jpg",
        title_: "README Gen",
        description_: "Inquirer app that allows generation of a README file base on questions."
    },
    weather: {
        img_: "/weather.jpg",
        title_: "Weather API",
        description_: "Web page that allows to check weather of a city of user's choice."
    },
    ecommerce: {
        img_: "/commerce.jpg",
        title_: "Yardify",
        description_: "Page that allows users to put unused stuff to sale."
    },
    digital: {
        img_: "/digital.jpg",
        title_: "Fox Quest",
        description_: "Digital Twin Tracker that allows an industry manager to live check its production."
    },
};

export const Portfolio = () => {

    return (
        <div className="flex justify-center items-center pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5">
                <ProjectCard object={card_struct.vehicle} />
                <ProjectCard object={card_struct.tracker} />
                <ProjectCard object={card_struct.readMe} />
                <ProjectCard object={card_struct.weather} />
                <ProjectCard object={card_struct.ecommerce} />
                <ProjectCard object={card_struct.digital} />
            </div>
        </div>
    );
};