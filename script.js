import { API_KEY } from './secret'

const fetchData = async() => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: API_KEY,
      
    }
  })
}