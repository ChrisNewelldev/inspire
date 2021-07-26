import { ProxyState } from "../AppState.js"
import Todo from "../Models/Todo.js"
import { todosApi } from "./AxiosService.js"

class TodosService {

  constructor() {
    this.getAllTodos()
  }
  async createTodo(rawTodo) {
    console.log(res.data)
    const res = await todosApi.post('todo', rawTodo)
    console.log((res.data))
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
  }

  async getAllTodos() {
    try {
      const res = await todosApi.get('todos')
      console.log(res.data)
      ProxyState.todos = res.data.map(t => new Todo(t))
    } catch (error) {
      console.error(error)
    }
  }
  async completeTodo(todoId) {

  }
}
export const todosService = new TodosService()