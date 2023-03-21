import { test } from '@japa/runner'
import { obtenerTokenAutorizacion2 } from '../TestAuth'

test.group('Form forms', () => {
  // Write your test here
  test('Create a form', async ({ client }) => {
    const token = await obtenerTokenAutorizacion2()
    const response = await client.post('/api/v1/form/postquestions').json({
        "estudianteId": 1,
        "answers": [102, 105]
    }).header('Authorization', `Bearer ${token}`)
    response.assertStatus(200)
  })

  test('Create a form without info', async ({ client }) => {
    const token = await obtenerTokenAutorizacion2()
    const response = await client.post('/api/v1/form/postquestions').header('Authorization', `Bearer ${token}`)
    response.assertStatus(400)
  })

  test('Create a form with invalid answers', async ({ client }) => {
    const token = await obtenerTokenAutorizacion2()
    const response = await client.post('/api/v1/form/postquestions').json({
        "estudianteId": 1,
        "answers": [6, 9]
    }).header('Authorization', `Bearer ${token}`)
    response.assertStatus(400)
  })

  test('Create a form with invalid token', async ({ client }) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNjYXJyZXJvQGdtYWlsLmNvbSIsImlkIjo0LCJpYXQiOjE2NzkyNjM0ODMsImV4cCI6MTY3OTI2NTI4M30.7UTBfxE6MOdel2wnOaDJjy1GLra6cNoMBeIIJdzaWpw'
    const response = await client.post('/api/v1/form/postquestions').json({
      "estudianteId": 1,
        "answers": [16, 20]
    }).header('Authorization', `Bearer ${token}`)
    response.assertStatus(401)
  })

  test('Create a form withouth token', async ({ client }) => {
    const response = await client.post('/api/v1/form/postquestions').json({
      "estudianteId": 1,
        "answers": [16, 20]
    })
    response.assertStatus(401)
  })

  test('Create a form with invalid estudianteId', async ({ client }) => {
    const token = await obtenerTokenAutorizacion2()
    const response = await client.post('/api/v1/form/postquestions').json({
        "estudianteId": 100,
        "answers": [16, 20]
    }).header('Authorization', `Bearer ${token}`)
    response.assertStatus(400)
  })

  test('Create a form withouth info', async ({ client }) => {
    const token = await obtenerTokenAutorizacion2()
    const response = await client.post('/api/v1/form/postquestions').json({
    }).header('Authorization', `Bearer ${token}`)
    response.assertStatus(400)
  })

  test('get forms', async ({ client }) => {
    const token = await obtenerTokenAutorizacion2()
    const response = await client.get('/api/v1/form/getquestions').header('Authorization', `Bearer ${token}`)
    response.assertStatus(200)
  })

})
