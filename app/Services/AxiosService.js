export const baseApi = axios.create({
  baseUrl: "https://bcw-sandbox.herokuapp.com/api",
  timeout: 13000
})
export const imagesApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/images",
  timeout: 13000
})

export const quotesApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 13000
})

export const todosApi = axios.create({
  //TODO Change YOURNAME to your actual name
  baseURL: "https://bcw-sandbox.herokuapp.com/api/CHRIS/todos",
  timeout: 13000
})

export const weathersApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/weather",
  timeout: 13000
})

