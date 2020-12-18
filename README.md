# Git.Interview

## Application Overview

* Must use a Node and Express server   

* Must use Handlebars.js as the template engine 

* Must be backed by a MySQL database with a Sequelize ORM

* Must utilize both GET and POST routes for retrieving and adding new data
    - Post interview questions
    - Post interview solutions

* Must be deployed using Heroku (with data)

* Utilizes a new package that we haven’t discussed 
    * Usage: email validation
        - ` npm i validate-email-node-js `
        - The function signature accepts an arguments and returns a boolean value.
        - true (boolean) valid email address.
        - false (boolean) invalid email address.
        ```
        Example:
        const validateEmail = require('validate-email-node-js');
        const result = validateEmail.validate('mail@example.com');
        
        ```

* Must have a polished front end/UI

* Must have a folder structure that meets the MVC paradigm

* Must meet good quality coding standards (indentation, scoping, naming)

* Must protect API keys in Node with environment variables

## User-story

```
As a developer
I want to prep for future interviews,
By having quick access to popular interview questions, along with different solutions.
As a user, I want to be able to vote on which solution is most helpful.

```

## Project Criteria 
* View public page
* Select topics of interest (drop-down)
* New users create account form
* User sign-in form
* User must sign-in to interact with Q&A content
* Validate user has real email (npm package)
* User can fill out a post question form 
* Question form contains topic selection (drop-down)
* Allow users to responde to questions with solutions
* Allow users to vote up/down on posted questions & solutions
* Allow author of qestion or solution to edit/delete their posts 
* Link github repo to Heroku and deploy application


## Presentation Requirements

Use this [project presentation template](https://docs.google.com/presentation/d/1_u8TKy5zW5UlrVQVnyDEZ0unGI2tjQPDEpA0FNuBKAw/edit?usp=sharing) to address the following: 

* Elevator pitch: a one minute description of your application

* Concept: What is your user story? What was your motivation for development?

* Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?

* Demo: Show your stuff!

* Directions for Future Development

* Links to to the deployed application and the GitHub repository

