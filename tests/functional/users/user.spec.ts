import { test } from '@japa/runner'
import { obtenerTokenAutorizacion, obtenerTokenAutorizacion2 } from '../TestAuth'

test.group('Users Methods', () => {
  // Write your test here

  test('Create a user', async ({ client }) => {
    const response = await client.post('/api/v1/user/create').json({
      firstName: "Juana",
      secondName: "",
      surname: "Arco",
      secondSurName: "velez",
      typeDocument: 1,
      role: 2,
      documentNumber: "1100000021",
      email: "jderco1021@gmail.com",
      phone: "3123212311",
      password: "1234567890",
      state: "true"
    })
    response.assertStatus(201)
  })

  test('Create a user if role is none', async ({ client }) => {
    const response = await client.post('/api/v1/user/create').json({
      firstName: "Juana",
      secondName: "",
      surname: "Arco",
      secondSurName: "velez",
      typeDocument: 1,
      documentNumber: "1110000021",
      email: "jderco1121@gmail.com",
      phone: "3123212311",
      password: "1234567890",
      state: "true"
    })

    response.assertStatus(201)
  })


  test('Create a user with invalid email', async ({ client }) => {
    const response = await client.post('/api/v1/user/create').json({
      firstName: "Juana",
      secondName: "",
      surname: "Arco",
      secondSurName: "velez",
      typeDocument: 1,
      documentNumber: "10049100",
      email: "da_alejandro@gmail.com",
      phone: "3123212311",
      password: "1234567890",
      state: "true"
    })
    response.assertStatus(400)
  })

  test('Create a user with invalid document number', async ({ client }) => {
    const response = await client.post('/api/v1/user/create').json({
      firstName: "Juana",
      secondName: "",
      surname: "Arco",
      secondSurName: "velez",
      typeDocument: 1,
      documentNumber: 1037660985,
      email: "da_alejandro0@gmail.com",
      phone: "3123212311",
      password: "1234567890",
      state: "true"
    })
    response.assertStatus(400)
  })

  test('list users', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.get('/api/v1/user/getUsers').header('Authorization', `Bearer ${token}`)
    response.assertStatus(200)
  })

  test('list users without token', async ({ client }) => {
    const response = await client.get('/api/v1/user/getUsers')
    response.assertStatus(401)
  })

  test('list users with invalid token', async ({ client }) => {
    const token = await obtenerTokenAutorizacion2()
    const response = await client.get('/api/v1/user/getUsers').header('Authorization', `Bearer ${token}`)
    response.assertStatus(401)
  })

  test('list user', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.get('/api/v1/user/getUser/1').header('Authorization', `Bearer ${token}`)
    response.assertStatus(200)
  })

  test('list user without token', async ({ client }) => {
    const response = await client.get('/api/v1/user/getUser/1')
    response.assertStatus(401)
  })

  test('list user with invalid token', async ({ client }) => {
    const token = await obtenerTokenAutorizacion2()
    const response = await client.get('/api/v1/user/getUser/1').header('Authorization', `Bearer ${token}`)
    response.assertStatus(401)
  })

  test('list user with invalid id', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.get('/api/v1/user/getUser/100').header('Authorization', `Bearer ${token}`)
    response.assertStatus(400)
  })

  test('login user', async ({ client }) => {
    const response = await client.post('/api/v1/login').json({
      email: 'scarrero@gmail.com',
      password: 'passAdmin2'
    })
    response.assertStatus(200)
  })

  test('login user with invalid email', async ({ client }) => {
    const response = await client.post('/api/v1/login').json({
      email: 'scarreroo@gmail.com',
      password: 'passAdmin2'
    })
    response.assertStatus(400)
  })

  test('login user with invalid password', async ({ client }) => {
    const response = await client.post('/api/v1/login').json({
      email: 'scarrero@gmail.com',
      password: 'passAdmin'
    })
    response.assertStatus(400)
  })

  test ('update user', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.put('/api/v1/user/update/1').header('Authorization', `Bearer ${token}`).json({
      "firstName": "daniel",
      "secondName": "Jose",
      "surname": "cruz",
      "secondSurName": "casallaz",
      "typeDocument": 1,
      "documentNumber": "123456789",
      "email": "danielJ@gmail.com",
      "phone": "32123122314"
    })
    response.assertStatus(200)

  })

  test ('update user from other user', async ({ client }) => {
    const token = await obtenerTokenAutorizacion2()
    const response = await client.put('/api/v1/user/update/1').header('Authorization', `Bearer ${token}`).json({
      "firstName": "daniel",
      "secondName": "Jose",
      "surname": "cruz",
      "secondSurName": "casallaz",
      "typeDocument": 1,
      "documentNumber": "123456789",
      "email": "danielJ@gmail.com",
      "phone": "32123122314"
    })
    response.assertStatus(400)
  })

  test ('update user with invalid id', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.put('/api/v1/user/update/100').header('Authorization', `Bearer ${token}`).json({
      "firstName": "daniel",
      "secondName": "Jose",
      "surname": "cruz",
      "secondSurName": "casallaz",
      "typeDocument": 1,
      "documentNumber": "123456789",
      "email": "danielJ@gmail.com",
      "phone": "32123122314"
    })
    response.assertStatus(400)
  })


  test ('update user without token', async ({ client }) => {
    const response = await client.put('/api/v1/user/update/1').json({
      "firstName": "daniel",
      "secondName": "Jose",
      "surname": "cruz",
      "secondSurName": "casallaz",
      "typeDocument": 1,
      "documentNumber": "123456789",
      "email": "danielJ@gmail.com",
      "phone": "32123122314"
  })
    response.assertStatus(400)
  })

  test ('update user with invalid token', async ({ client }) => {
    const token = 'eyJhbGciOiJNiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhX2FsZWpBnbWFpbC5jb20iLCJpZCI6MTAsImlhdCI6MTY3OTI0OTg2NSwiZXhwIjoxNjc5MjUxNjY1fQ.V5CbYX76RjRItG3LnJC5bErkZ6lVf7H9g'
    const response = await client.put('/api/v1/user/update/1').header('Authorization', `Bearer ${token}`).json({
      "firstName": "daniel",
      "secondName": "Jose",
      "surname": "cruz",
      "secondSurName": "casallaz",
      "typeDocument": 1,
      "documentNumber": "123456789",
      "email": "danielJ@gmail.com",
      "phone": "32123122314"
    })
    response.assertStatus(400)
  })

  test ('update user with invalid id', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.put('/api/v1/user/update/100').header('Authorization', `Bearer ${token}`).json({
      "firstName": "daniel",
      "secondName": "Jose",
      "surname": "cruz",
      "secondSurName": "casallaz",
      "typeDocument": 1,
      "documentNumber": "123456789",
      "email": "danielJ@gmail.com",
      "phone": "32123122314"
    })
    response.assertStatus(400)
  })

})
