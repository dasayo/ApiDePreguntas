import axios from 'axios';
import Env from '@ioc:Adonis/Core/Env';

export async function obtenerTokenAutorizacion(): Promise<string> {
  let endpoint = '/api/v1/login';
  let body = {
    email: Env.get('EMAIL'),
    password: Env.get('EMAIL_PASSWORD')
  }

  let axiosResponse = await axios.post(`${Env.get("PATH_APP") + endpoint}`, body)
  return axiosResponse.data["token"]
}

export async function obtenerTokenAutorizacion2(): Promise<string> {
  let endpoint = '/api/v1/login';
  let body = {
    email: Env.get('EMAIL2'),
    password: Env.get('EMAIL_PASSWORD2')
  }

  let axiosResponse = await axios.post(`${Env.get("PATH_APP") + endpoint}`, body)
  return axiosResponse.data["token"]
}
