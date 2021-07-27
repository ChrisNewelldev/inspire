import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";

export function saveState() {
  localStorage.setItem('Inspire', JSON.stringify({
    lists: ProxyState.lists,
    tasks: ProxyState.tasks
  }))
  console.log('saved state', ProxyState)
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('Inspire'))
  console.log(data)
  if (data != null) {
    ProxyState.lists = data.lists.map(l => new Todo(l))

    localStorage.clear()
  }

}