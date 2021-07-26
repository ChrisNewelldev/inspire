import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { weathersApi } from "./AxiosService.js";

class WeathersService {
  async getWeather() {
    let res = await weathersApi.get()
    ProxyState.weathers = new Weather(res.data)
    console.log(res.data)
  }
}

export const weathersService = new WeathersService()