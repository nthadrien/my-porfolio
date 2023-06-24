import Cfill from '../assets/theme-icons/cfill.svg';
import Chalf from '../assets/theme-icons/chalf.svg';
import Cre from '../assets/theme-icons/cresant.svg';

const Experiences = [
    {
        job: "Physics Student",
        company: "University Of Buea",
        years: "4",
        time: "2017 - 2021",
        languages: "Fortran and Phyton",
        frameworks: "/a",
        description: ""
    },
    {
        job: "Frontend Intern",
        company: "Wakamann .LLC",
        years: "1 year",
        time: "2022 - 2023",
        languages: "Html, Css & Javascript",
        frameworks: "Vue Js, React",
        description: ""
    },
    {
        job: "Backend Intern",
        company: "Wakamann .LLC",
        years: "4 months",
        time: "2017 - 2021",
        languages: "Javascript, SQL & No SQL",
        frameworks: "Node Js, Express Js, Mongo DB, Postgress & Nest JS",
        description: ""
    },
    {
        job: "Fullstack",
        company: null,
        years: "4 months",
        time: " feb 2023 - june 2023",
        languages: "Javascript",
        frameworks: "Node Js, Express Js",
        description: ""
    },
];

export const FlipCardInfo = [];

export const pages = [
    { name: "home", go: "/#" },
    { name: "about", go: "/#about" },
    { name: "projects", go: "/projects" }
];

export const themesAvailable = [
    { name: "light", Img: Cfill },
    { name: "neon", Img: Chalf },
    { name: "dark", Img: Cre },
];