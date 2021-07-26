import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"

function _draw() {

  let template = ''

  ProxyState.todos.forEach(todo => {
    template += todo.Template
  })
  console.log(template)
  document.getElementById('todo').innerHTML = template
}

export default class TodosController {
  constructor() {
    ProxyState.on('todos', _draw)
    ProxyState.on('todos', () => { console.log('new todos') })
    _draw()
  }

  async createTodo() {
    try {
      event.preventDefault()
      console.log('Creating todo')
      let form = event.target
      let rawTodo = {
        description: form.description.value
      }
      await todosService.createTodo(rawTodo)
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  deleteTodo(todoId) {
    console.log('deleting todo', todoId)
    todosService.deleteTodo(todoId)
  }

  completeTodo(todoId) {
    console.log(res.data)
    todosService.completeTodo(todoId)
  }

}


