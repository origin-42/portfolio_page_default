import medicManagerImg from '../images/portfolio_images/medic-manager.jpg';
import eCommerceImg from '../images/portfolio_images/ecommerce.jpg';
import employeeDatabaseImg from '../images/portfolio_images/employeedatabase.jpg';
import whereToWatchImg from '../images/portfolio_images/wheretowatch.jpg';
import readmeGeneratorImg from '../images/portfolio_images/readme.jpg';
import passwordGenerator from '../images/portfolio_images/password.jpg';

let projects = [
    {
        name: "Medic Manager",
        id: "medicmanager",
        githubUrl: "https://github.com/bernardjbs/Medic-Manager",
        description: "Medic Manager is an interactive system for storage expiry tracking and replacement schedules featuring email reminders and a chatbot.",
        releaseDate: "June 2022",
        releaseYear: "2022",
        technologies: ["HTML", "CSS", "Javascript", "Node.js", "Restful API", "Handlebars", "Express", "MySql", "Sequelize", "Emailer", "MVC", "Heroku", "Authentication"],
        projectType: "Individual Project",
        image: medicManagerImg,
        longDescription: "This application provides a means for users of various age groups to keep track of medications and receive email reminders of expiry dates of that information.",
        pointOne: "Add any medications with pre-defined and custom fields to display a graph of information for any user",
        pointTwo: "Update and delete options available",
        pointThree: "Polished user interface and user specific login options",
        purpose: "Too many things to keep track of. Let this application do it for you."
    },
    {
        name: "E-Commerce Application",
        id: "ecommerce",
        githubUrl: "https://github.com/origin-42/e-commerce",
        description: "A web application to store, view, add to, update, and remove product data from.",
        releaseDate: "May 2022",
        releaseYear: "2022",
        technologies: ["JavaScript", "Node.JS", "MySql", "Express"],
        projectType: "Individual Project",
        image: eCommerceImg,
        longDescription: "This application serves as a base for creating and populating an e-commerce backend with database information relative to your products and product categories.",
        pointOne: "Easily add information into a products database",
        pointTwo: "Reduce inconsistency with products through tags relating each category",
        pointThree: "Update, delete, add, retrieve information",
        purpose: "Keep track of products and category information."
    },
    {
        name: "Employee Database",
        id: "employee_database",
        githubUrl: "https://github.com/origin-42/employee-database",
        description: "An application to hold employee information.",
        releaseDate: "May 2022",
        releaseYear: "2022",
        technologies: ["JavaScript", "Node.JS", "MySql", "Express"],
        projectType: "Individual Project",
        image: employeeDatabaseImg,
        longDescription: "The idea was to further my knowledge with asyncronous code whilst also creating an intuitive employee registry that is updateable.",
        pointOne: "Keep track of company information",
        pointTwo: "Includes department, role, and employee information in one location",
        pointThree: "Display information on the click of a button",
        purpose: "Ensure consistency across departments and easy to obtain information for the company."
    },
    {
        name: "Where to Watch",
        id: "whereToWatch",
        githubUrl: "https://github.com/origin-42/where-to-watch",
        overlayUrl: "./assets/images/portfolio-images/overlay_images/movies.jpg",
        description: "Got a show you're interested in? Get all of its information here in one easy search",
        releaseDate: "March, 2022",
        releaseYear: "2022",
        technologies: ["HTML", "CSS", "JavaScript", "APIs", "Boostrap", "JQuery", "JQueryUI", "Github"],
        projectType: "Group Project",
        image: whereToWatchImg,
        longDescription: "Here is an application designed to help movie enthusiasts decide which movie to watch and navigate where, and how to watch it, weather it be bought, rented, or streamed.",
        pointOne: "Consider a movie title and get matching titles from criteria",
        pointTwo: "Click to view movie more in depth, including reviews, actors, actors latest movies and more",
        pointThree: "View available streaming websites and how to watch",
        purpose: "We wanted to be able to link end-points for streaming a movie whilst checking reviews all in one place."
    },
    {
        name: "Readme Generator",
        id: "readmeGenerator",
        githubUrl: "https://github.com/origin-42/readme-generator",
        description: "A simple application that generates a quality readme file with Node.js & Inquirer",
        releaseDate: "April 2022",
        releaseYear: "2022",
        technologies: ["JavaScript", "Node.JS", "Inquirer"],
        projectType: "Individual Project",
        image: readmeGeneratorImg,
        longDescription: "Creating multiple repositories can be time consuming with the number of repositories developed. Here we can simply type the desired information and the formatting will be completed automatically, whilst ensuring formatting is consistent. This will save time searching for information that will be the same everytime, ensuring consistency across all applications, creating a clean and presenteable README.md file.",
        pointOne: "Develop an application and run program to develop an in depth readme file",
        pointTwo: "Easily adjust output by directly altering text",
        pointThree: "Easy to use prompt based application",
        purpose: "Cut time developing a readme file and create more consistency."
    },
    {
        name: "Password Generator",
        id: "passwordGen",
        githubUrl: "https://github.com/origin-42/password-generator",
        overlayUrl: "./assets/images/portfolio-images/overlay_images/password.jpg",
        description: "Randomly generate a password for use with online applications.",
        releaseDate: "February, 2022",
        releaseYear: "2022",
        technologies: ["HTML", "CSS", "JavaScript"],
        projectType: "Individual Project",
        image: passwordGenerator,
        longDescription: "Here you can generate a password from 8 to 128 characters in length and check criteria to allow for a more customiseable and secure password for use in applications.",
        pointOne: "Generate a password for online applications",
        pointTwo: "Select from criteria to reduce brute force hacking attempts",
        pointThree: "Easy click to save clickboard functionality for mobile devices",
        purpose: "This was a game designed to provide an easy to use application to generate a password and help users reduce potential security breaches on their devices by not using the same password twice."
    },
];

export default projects