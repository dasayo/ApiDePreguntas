import { test } from '@japa/runner'
import { obtenerTokenAutorizacion} from '../TestAuth'

test.group('Test od questions controller', () => {
  // Write your test here
  test('Create a question', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.post('/api/v1/questions/create').json({
      "question": "¿que dia fue el 21 de febrero?",
      "options": [
          {
              "opcion":"martes",
              "iscorrect":true
          },{
              "opcion":"jueves",
              "iscorrect":false
          },{
              "opcion":"lunes",
              "iscorrect":false
          },{
              "opcion":"sabado",
              "iscorrect":false
          } ]
  }).header('Authorization', `Bearer ${token}`)
    response.assertStatus(200)
  })

  test('get questions', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.get('/api/v1/questions/getQuestions').header('Authorization', `Bearer ${token}`)
    response.assertStatus(200)
  })

  // test('get question inexistent', async ({ client }) => {
  //   const token = await obtenerTokenAutorizacion()
  //   const response = await client.get('/api/v1/questions/getQuestion/26').header('Authorization', `Bearer ${token}`)
  //   response.assertStatus(400)
  // })

  test('delete question', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.delete('/api/v1/questions/deleteQuestion/26').header('Authorization', `Bearer ${token}`)
    response.assertStatus(200)
  })

  test('delete question with invalid id', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.delete('/api/v1/questions/deleteQuestion/100').header('Authorization', `Bearer ${token}`)
    response.assertStatus(400)
  })

  test('update question', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.put('/api/v1/questions/updateQuestion/26').json({
      "question": "¿que día es mañana?"
    }).header('Authorization', `Bearer ${token}`)
    response.assertStatus(200)
  })

  test('update question with invalid id', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.put('/api/v1/questions/updateQuestion/100').json({
      "question": "¿que día es mañana?"
    }).header('Authorization', `Bearer ${token}`)
    response.assertStatus(400)
  })

  test('get options', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.get('/api/v1/questions/getOptions/27').header('Authorization', `Bearer ${token}`)
    response.assertStatus(200)
  })

  test('get options with inexistent question', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.get('/api/v1/questions/getOptions/26').header('Authorization', `Bearer ${token}`)
    response.assertStatus(404)
  })

  test('get options with invalid id', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.get('/api/v1/questions/getOptions/100').header('Authorization', `Bearer ${token}`)
    response.assertStatus(404)
  })

  test('update option', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.put('/api/v1/questions/updateAnswer/101').json({
      "opcion": "viernes",
      "iscorrect": true
    }).header('Authorization', `Bearer ${token}`)
    response.assertStatus(200)
  })

  test('update option with invalid id', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.put('/api/v1/questions/updateAnswer/100').json({
      "opcion": "viernes",
      "iscorrect": true
    }).header('Authorization', `Bearer ${token}`)
    response.assertStatus(404)
  })



})
