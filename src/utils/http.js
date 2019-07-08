import axios from 'axios'

const http = {
  get({url, params={},headers={}}) {
    return axios({
      url,
      method: 'GET',
      params,
      headers
    })
    .then((result) => {
      return result.data
    })
  },
  post({url, data={},params={},headers={},}) {
    return axios({
      url,
      data,
      method: 'POST',
      params,
      headers,
    })
    .then((result) => {
      return result.data
    })
  }
}

export default http