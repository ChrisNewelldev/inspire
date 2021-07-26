import { ProxyState } from "../AppState.js"

export default class Weather {
  constructor({ main, temp }) {
    this.main = main
    this.temp = temp
  }

  get Template() {
    return `
     <p>${ProxyState.weathers.main.temp}</p>
     `
  }
}