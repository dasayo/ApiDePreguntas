import { test } from '@japa/runner'
import { obtenerTokenAutorizacion} from '../TestAuth'

test.group('Roles roles', () => {
  // Write your test here
  test('Create a rol', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.post('/api/v1/roles/create').json({
      "name": "Administrador"
    }).header('Authorization', `Bearer ${token}`)
    response.assertStatus(200)
  })

  test('Create a rol with invalid name', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.post('/api/v1/roles/create').json({
      "name": ""
    }).header('Authorization', `Bearer ${token}`)
    response.assertStatus(400)
  })

  test('get roles', async ({ client }) => {
    const token = await obtenerTokenAutorizacion()
    const response = await client.get('/api/v1/roles/getRoles').header('Authorization', `Bearer ${token}`)
    response.assertStatus(200)
  })

})
