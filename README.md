# BLOGS API ⌨️

Project developed in the Back-end Module at the [Trybe](https://www.betrybe.com/) course.

### 🎯
The project goal was to develop a database using Sequelize and a REST API to manage a blog with the MSC software architecture using Node and Express. <br>
The API presents all the `CRUD` operations. <br>
JWT is present in the authentications, meanwhile, Joi handles the validations.

<br>

## ✨**Features**

Feature | Route
------- | ------
Login | POST /login
Create User | POST /user
List all users | GET /user
Get user by ID | GET /user/:id
Create post category | POST /categories
List post categories | GET /categories
Create a blog post linking it to categories | POST /post
List all blog posts with their users and categories | GET /post
Get by ID the blog post with its user and categories| GET /post/:id
Update the title and/or content of a blog post if the logged user is the author| PUT /post/:id
Delete post by ID if the logged user is the author | DELETE /post/:id
Delete the logged user | DELETE /user/me
Search for title or content using a query string | GET /post/search

---

<br/>

🛠️ **Tools:**
* [Sequelize](https://sequelize.org/)
* [Express](https://expressjs.com/)
* [Node](https://nodejs.org/en/)
* [JWT](https://jwt.io/)
* [Joi](https://joi.dev/api/?v=17.6.0)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [express-async-errors](https://www.npmjs.com/package/express-async-errors)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [MySQL](https://www.mysql.com/)

<br/>
---

## How to install the application:
Download the code:
```
git clone git@github.com:queite/blogs-api.git
```
Enter the root folder:
```
cd blogs-api
```
Install dependencies:
```
npm install
```
Start the API:
```
npm start
```
---

All [Trybe](https://www.betrybe.com/) projects use `linters`, `Git` and `GitHub`.<br/>
