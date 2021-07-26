import { ProxyState } from "../AppState.js"
import Todo from "../Models/Todo.js"
import { todosApi } from "./AxiosService.js"

class TodosService {

  constructor() {
    this.getAllTodos()
  }
  async createTodo(rawTodo) {
    const res = await todosApi.post('', rawTodo)
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
    console.log((res.data))
  }

  async getAllTodos() {
    try {
      const res = await todosApi.get('')
      console.log(res.data)
      ProxyState.todos = res.data.map(t => new Todo(t))
    } catch (error) {
      console.error(error)
    }
  }
  async completeTodo(todoId) {
    try {
      let foundTodo = ProxyState.todos.find(t => t.id == todoId)
      foundTodo.completed.true
      const res = await todosApi.put('/todoId' + todoId, foundTodo)
      console.log('updated todo', res.data)

      ProxyState.todos = ProxyState.todos
      this.getAllTodos()
    } catch (error) {
      console.error(error)
    }
  }

  async deleteTodo(todoId) {
    debugger
    try {
      const res = await todosApi.delete(':todoId' + todoId)
      console.log(res.data)
      ProxyState.todos = ProxyState.todos.filter(t => t.id != todoId)
      this.getAllTodos()
    } catch (error) {
      console.error(error)
    }
  }
}
export const todosService = new TodosService()