import Image from "./Models/Image.js"
import Quote from "./Models/Quote.js"
//import Todo from "./Models/Todo.js"
import Weather from "./Models/Weather.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  /** @type {Image} */
  images = []
  /** @type {Quote} */
  quotes = []
  /** @type {Todo[]} */
  todos = []
  /** @type {Weather} */
  weathers = []
  /** @type {Clock[]} */
  clocks = []


}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
