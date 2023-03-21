/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'



Route.group(() => {
  Route.post('/login', 'UsersController.loginUser')
}).prefix('api/v1')

Route.group(() => {
  Route.post('/create', 'UsersController.registerUser')
}).prefix('api/v1/user')

Route.group(() => {
  Route.get('/getUsers', 'UsersController.getUsers')
  Route.get('/getUser/:id', 'UsersController.getUser')
}).prefix('api/v1/user').middleware('admin')

Route.group(() => {
  Route.put('/update/:id', 'UsersController.updateUser')
}).prefix('api/v1/user').middleware('update')


Route.group(() => {
  Route.post('/create', 'QuestionsController.createQuestion')
  Route.get('/getQuestions', 'QuestionsController.getQuestions')
  Route.delete('/deleteQuestion/:id', 'QuestionsController.deleteQuestion')
  Route.put('/updateQuestion/:id', 'QuestionsController.updateQuestion')
  Route.put('/updateAnswer/:id', 'AnswersController.updateAnswer')
  Route.get('/getOptions/:id', 'AnswersController.getAnswers')
}).prefix('api/v1/questions').middleware('admin')

Route.group(() => {
  Route.post('/postquestions', 'FormsController.createForm')
  Route.get('/getquestions', 'FormsController.getForms')
}).prefix('api/v1/form').middleware('auth')

Route.group(() => {
  Route.post('/create', 'RolesController.createRol')
  Route.get('/getRoles', 'RolesController.getRoles')
}).prefix('api/v1/roles').middleware('admin')


Route.group(() => {
  Route.get('/getTypes', 'TypesDocumentsController.getTypesDocuments')
  Route.post('/create', 'TypesDocumentsController.createTypeDocument')
}).prefix('api/v1/typeDocumets').middleware('admin')

