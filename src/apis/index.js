import axios from 'axios'
import { API_ROOT } from '@/constants'

const token = import.meta.env.VITE_ACCESS_TOKEN

export const fetchSignedUrlAPI = async () => {
  const response = await axios.get(`${API_ROOT}/api/v1/signed_url`, { headers: { 'Authorization' : `${token}` } })
  return response.data
}