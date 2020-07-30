# WORK-DAY PLANNER
> Full-stack application designed for outlining and scheduling your workday.

## [Try it yourself!](https://workdayplanner.herokuapp.com/)

# Description
A daily planner displaying a typical "9-to-5" schedule in hour segments. User may enter notes into the text-area and save.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

You will need MySQL installed if you want to run this application locally. For help installing MySQL, visit: [https://dev.mysql.com/doc/](https://dev.mysql.com/doc/)

### Installing 

Git clone the repository to your local machine: 

HTTPS:
```
$ git clone https://github.com/gusvalenzuela/day-planner-bootcamp.git
```
SSH:
````
$ git clone git@github.com:gusvalenzuela/day-planner-bootcamp.git
````

Next, cd into the repository you cloned and install the necessary dependencies by running (or package manager of your choice):
````
$ npm install
````

You will then be able to start the app locally by runnning:
````
$ npm start
````
or 
````
$ npm run dev
````

## Built With

* [Sequelize](https://sequelize.org/) - MySQL Database
* [Express.js](https://expressjs.com/) - Node.js framework
* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [Handlebars.js](https://handlebarsjs.com/) - HTML Rendering
* [NPM](https://www.npmjs.com/) - Dependency management
* [Materialize](https://materializecss.com/) - CSS framework
* [Passport](http://www.passportjs.org/) - Authentication platform

## Planned updates

At the moment, this app is the minimum viable product. I hope to turn it into a Progressive Web Application in the near future to add offline functionality among other things.

- COMING SOON: A New York Times article from their archives is displayed under the planner, in the "This Month in History" section.
- Cycle through hours
- Dark Mode
