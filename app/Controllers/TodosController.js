import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";


function _draw() {
  let template = ''

  ProxyState.todos.forEach(todo => {
    template += todo.Template
  })
  //console.log(template)
  document.getElementById('todo').innerHTML = template
}

export default class TodosController {
  constructor() {
    ProxyState.on('todos', _draw)
    ProxyState.on('todos', () => { console.log('new todos') })
    _draw()
    this.getAllTodos()
  }
  async getAllTodos() {
    try {
      await todosService.getAllTodos()
    } catch (error) {
      console.error(error)
    }
  }
  async createTodo() {
    event.preventDefault()
    console.log('Creating todo')
    let form = event.target
    let rawTodo = {
      description: form.description.value
    }
    await todosService.createTodo(rawTodo)
    form.reset()
  }

  destroyList(id) {
    todosService.destroyList(id)
  }

  completeTodo(id) {

    const activeTodo = ProxyState.todos.find(x => x._id === id)
    if (!activeTodo) {
      return
    }
    activeTodo.completed = !activeTodo.completed
    todosService.completeTodo(activeTodo)

  }

}
