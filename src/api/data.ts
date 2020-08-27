import axios from './config/http'

const data = {
  getData: (p: any) => axios.get('/data/lists', p)
}

export default data