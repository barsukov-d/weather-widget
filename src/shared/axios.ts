import axios, { type AxiosInstance } from 'axios'

const API_URL = 'http://api.openweathermap.org'

const createApi = (baseURL = API_URL) => {
	const api: AxiosInstance = axios.create({
		baseURL
	})

	return api
}

const api = createApi()

export { api, axios }
