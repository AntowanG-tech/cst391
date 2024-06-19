# Activity 1
## Executive Summary
Activity 1 is an example of a Web Application interfacing to a MySQL Database.

- The Architecture will be utilizing Model View Controller (MVC)
    - Model -the maintainer of the data, e.g. Database
    - View - the User Interface, currently the Web Browser
    - Controller - Middleware and the Management / Coordinator of the Application
- The products utilized in this assingment are the following:
    - NodeJS
    - Node Package Manager
    - Express API
    - TypeScript
    - MySQL

## Recordings
- The following link is a screencast demonstration of the application. **Submission requirement**.

## Enviornment Variables (~/git/cst391/activities/activity1/MusicAPI/.env)
- The following are the variables defined for the MySQL Database
> #MySQL Settings
MY_SQL_DB_HOST=127.0.0.1
MY_SQL_DB_USER=root
MY_SQL_DB_PASSWORD=password
MY_SQL_DB_PORT=3306
MY_SQL_DB_DATABASE=music
MY_SQL_DB_CONNECTION_LIMIT=10

> #Server Settings
PORT=5000
NODE_ENV=development
GREETING=Hello from the environment file. Be kind to the environment!

---
## Database Relational Diagram

## Test Links
- The following are test links to validate the application is executing and communicating with the MySQL Database
- The images illustrate the results being displayed in the Web Browser and Postman

|Link|Browser Image|Postman Image|
|--|--|--|
|https://localhost:5000/albums|Row1Column2|Row1Column3|
|https://localhost:5000/artists|Row2Column2|Row2Column3|
|https://localhost:5000/albums?albumId=7|Row3Column2|Row3Column3|

- This is the System Output displaying the SQL variables, database connection and the GET method being called
