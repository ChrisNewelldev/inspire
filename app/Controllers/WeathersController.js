//import { ProxyState } from "../AppState.js";
//import { weathersService } from "../Services/WeathersService.js";

//function _drawWeather() {
//  const weathers = ProxyState.weathers
//  let template = ""
//  weathers.forEach(w => template += w.template)
//  document.getElementById("weather").innerHTML = template
//}

//export default class WeathersController {
 // constructor() {
 //   ProxyState.on("weather", _drawWeather())
 //   this.getWeather()
 // }
//}

//async getWeather() {
//  try {
//    await weathersService.getWeather(id)
//  } catch (error) {
//    console.error('Issue getting weather')
//  }
//}