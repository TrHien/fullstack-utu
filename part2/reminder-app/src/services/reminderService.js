import axios from 'axios'

const baseUrl = 'http://localhost:3001/reminders'

const getAll = () => {
  return axios.get(baseUrl).then((res) => res.data)
}

const create = (newObject) => {
  return axios.post(baseUrl, newObject).then((res) => res.data)
}

const remove = (id, deletedObject) => {
  return axios.delete(`${baseUrl}/${id}`, deletedObject).then((res) => res.data)
}

export default { getAll, create, remove }
