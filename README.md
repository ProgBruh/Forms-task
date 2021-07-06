# Forms-task

The application contains forms for registration and authorization. There is also a simple backend for handling requests.

## Usage

```sh
# clone repository
$ git clone https://github.com/ProgBruh/forms-task

# go to the project directory
$ cd forms-task/

# go to the backend directory
$ cd backend/

# install all dependencies
$ npm i

# run migrations
$ ./node_modules/.bin/knex migrate:latest

# run seed files
$ ./node_modules/.bin/knex seed:run

# start the server
$ npm run start

# go to the frontend directory
$ cd ../frontend/

# install all dependencies
$ npm i

# start the development server
$ npm run dev

# compile the application
$ npm run build
```
