import { test } from '@japa/runner'
import { obtenerTokenAutorizacion } from '../TestAuth'

test.group('Type documets type documet', () => {
  // Write your test here
  test('create type documet', async ({client}) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.post('/api/v1/typeDocumets/create').json({
      name: 'Cedula de ciudadania'
    }).header('Authorization', `Bearer ${token}`)
    response.assertStatus(200)
  })

  test('create type documet with invalid name', async ({client}) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.post('/api/v1/typeDocumets/create').json({
      name: ''
    }).header('Authorization', `Bearer ${token}`)
    response.assertStatus(400)
  })

  test('get type documets', async ({client}) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.get('/api/v1/typeDocumets/getTypes').header('Authorization', `Bearer ${token}`)
    response.assertStatus(200)
  })

})
