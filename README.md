# Setup Project Lumen & Vue

this project uses Lumen as a backend, Vuejs as a frontend, and components UI use Vuetify.
<!-- List Tasks Setup Project [here](https://trello.com/b/CdOg2gr9) -->


### List Version of a Package API 
- php 7.4.7
- Lumen 5.8
- tymon/jwt-auth 1.0.0-rc.5.1 // important compatible version for work auth jwt

### List Version of a Package WEB
- vue js ^2.6.11
- axios ^0.21.0
- vuetify ^2.2.11

## How to Install on Local Environment
You can follow the following step to configure this project
- Clone the repository using the command "git clone https://github.com/haidi20/setup-project-lumen-vue.git"
### Running API
- First create database in mysql (whatever you want name datatabase)
- copy file .env.example and rename file to .env and configure for the database
- in file .env setting database by database previous you create
- Now go up to project and run the following commands <br>
  ```$ composer install``` <br>
  ```$ php artisan migrate``` <br>
  ```$ php artisan db:seed``` <br>
- And run command ```$ php -S localhost:8000 -t public``` in your command line (make sure path command line in directory API) and <br> take a look at "localhost:8000" in browser
