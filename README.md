
A Node app built with MongoDB and Angular.

requirements: -

1. Install mongodb
2. Install the application: `npm install`
3. Start the server: `node server.js`
4. View in browser at `http://localhost:8080`
5. link for database url : 'mongodb://localhost/test'
6. please use node version v6.9.1
7.users need to be created using postman 
api for creating users : "POST" : http://localhost:8080/api/user

in body add 
            firstName : "xyz"
            lastName : "abc"
            avatar: "text"

8. friend relationship would also be created using postman
api for adding friends : "put" http://localhost:8080/api/:userId/user/:friendId
(change the :userId , and friendId with their respected Ids created in the db)
