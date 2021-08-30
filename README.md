## Agile API Test
API - CRM Service

<br />
<!-- INDEX -->
<ol>
  <lh>INDEX</lh>
  <li><a href="#about">About</a></li>
  <li><a href="#set-up"></a>Set up</a></li>
  <li><a href="#usage"></a>Usage</a></li>
  <li><a href="#contribution-requests"></a>Cotribution Requests</a></li>
  <li><a href="#license"></a>License</a></li>
  <li><a href="#contact"></a>Contact</a></li>
  <li><a href="#build"></a>Technologies</a></li>
</ol>

<br />
<!-- ABOUT -->

## About

  This project is a test based on a CRM Service.
  You would be able to work with users with different permits and customers.


<br />
<!-- SET UP -->

## Set Up

  First, you will need several techs and tools to work with the API.
  In case you have doubts, you could find all the links to all the documentation of each.


### Requisites

· [NodeJS](https://nodejs.org/es/)
<p>First, you'll need to install Node</p>

```sh
sudo apt install nodejs
```
<p>Make sure you have Node installed and which version with:</p>

```
node --version
```

· [NPM](https://www.npmjs.com/)

```sh
npm install npm@latest -g
```

· [Nodemon](https://www.npmjs.com/package/nodemon)
<p>Is not a must, but I recomend it</p>
Global:

```sh
npm install -g nodemon
```
Dependency:

```sh
npm install --save-dev nodemon
```

· [MongoDB](https://www.mongodb.com/)
<p>
  With Mongo you can work from Web Navigator or download the app.
  To connect it, you need to erase '.sample' from '.env' filename.
  The predetermined configuration works on local.
</p>

· [Postman](https://www.postman.com/)
<p>
  In case you work without Front, you will need Postman to check the lifecycle of the API. As Mongo, you can download it
  or work on Web Nav.
  You'll find the last Collection created for this API on this repo.
</p>

### Installation

1.- Clone the Repository

```sh
git clone https://github.com/your_username_/Project-Name.git
```

2.- Install NPM Packages
<p>You need to be on the Repository folder</p>

```sh
npm install
```
3.- Check environment
<p>Configure your variables in '.env' and 'config.js' files.</p>

4.- Run the API
```sh
npm run start
```

<br />
<!-- USAGE -->

## Usage

<p>
  Those are the endpoints of the current API.
  To use it, even on a new database, you have setted up a 'admin' user on the initial build. 
</p>

### Authentication

| METHOD | ENDPOINT | TOKEN | ROLE | PARAMS | CONTROLLER | RETURN |
| :----: | :--------: | :---: | :--: | :-----------: | :--------: | :----: |
| POST | /api/login | No | No | Email, password | Login | Token |

### Users Endpoints

| METHOD | ENDPOINT | TOKEN | ROLE | PARAMS | CONTROLLER | RETURN |
| :----: | :-------------------------: | :---: | :---: | :-------------: | :------------: | :--------------------: |
| POST | /api/users | Yes | Admin | userSchema | createUser | Object of the user created |
| GET | /api/users | Yes | Admin | Query in pages | getUsers | Array of all users |
| GET | /api/users /:userId | Yes | Admin | ObjectId: ‘userId’ | getUserById | Object of the specific user |
| PUT | /api/users /:userId | Yes | Admin | ObjectId: ‘userId’ | updateUser | Object of the user updated |
| DELETE | /api/users /:userId | Yes | Admin | ObjectId: ‘userId’ | deleteUser | Message to confirm the action |

### Customers Endpoints

| METHOD | ENDPOINT | TOKEN | ROLE | BODY / PARAMS | CONTROLLER | RETURN |
| :----: | :---------------------------------: | :---: | :--: | :-------------------: | :------------------: | :--------------------------: |
| POST | /api/customers | Yes | No | customerSchema | createCustomer | Object of the customer created |
| GET | /api/customers | Yes | No | Query in pages | getCustomers | Array of all customers |
| GET | /api/customers /:customerId | Yes | No | ObjectId: ‘customerId | getCustomerById | Object of the specific customer |
| PUT | /api/customers /:customerId | Yes | No | ObjectId: ‘customerId | updateCustomer | Object of the customer updated |
| DELETE | /api/customers /:customerId | Yes | No | ObjectId: ‘customerId | deleteCustomer | Message to confirm the action |

<br />
<!-- CONTRIBUTION REQUESTS -->

## Cotribution Requests

<p>In case you want to contribute in this project you have to follow the next steps:</p>

1.- Fork the project on your GitHub account
2.- Create a new Feature Branch [`git checkout -b feature/NewFeature`]
3.- Add your work to the branch [`git add feature/NewFeature or . (be careful, this will add every change you made)`]
4.- Commit the changes [`git commit -m 'Short description of the commit'`]
5.- Do a push into the branch [`git push origin feature/NewFeature`]
6.- Go to GitHub and open a Pull Requests

<br />
<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<br />
<!-- CONTACT -->

## Contact

Manuel González - [GitHub](https://github.com/ManuYuzu) - [LinkedIn](https://www.linkedin.com/in/manuaglez/)

<br />
<!-- OTHER TECHNOLOGIES -->

## Build 

- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Other Techs and Libraries

Dependencies:
- [mongoose](https://www.npmjs.com/package/mongoose)
- [morgan](https://www.npmjs.com/package/morgan)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)
- [helmet](https://www.npmjs.com/package/helmet)
- [express-validator](https://www.npmjs.com/package/express-validator)
- [mongoose-paginate](https://www.npmjs.com/package/mongoose-paginate)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [bcryptjs](https://www.npmjs.com/package/bcrypt)

Develop Dependencies:
- [babel/node](https://www.npmjs.com/package/@babel/node)
- [babel/cli](https://www.npmjs.com/package/@babel/cli)
- [babel/core](https://www.npmjs.com/package/@babel/core)
- [babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)

Global Dependencies:
- [nodemon](https://www.npmjs.com/package/nodemon)
