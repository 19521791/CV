import axios from 'axios'

const token = import.meta.env.VITE_ACCESS_TOKEN
const apiRoot = import.meta.env.VITE_API_ROOT

export const fetchSignedUrlAPI = async () => {
  const response = await axios.get(`${apiRoot}/api/v1/signed_url`, { headers: { 'Authorization' : `${token}` } })
  return response.data
}