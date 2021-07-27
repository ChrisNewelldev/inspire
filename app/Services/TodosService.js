import { ProxyState } from "../AppState.js"
import Todo from "../Models/Todo.js"
import { sandbox } from "./AxiosService.js"

class TodosService {
  constructor() {
    this.getAllTodos()
  }
  async createTodo(rawTodo) {
    const res = await sandbox.post(`Chris/todos`, rawTodo)
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
    console.log((res.data))
  }

  async getAllTodos() {

    const res = await sandbox.get(`Chris/todos`)
    console.log(res.data)
    ProxyState.todos = res.data.map(t => new Todo(t))
    console.log(ProxyState.todos);
  }
  async checkedTodo(id) {
    const res = await sandbox.put(`/:todoId`, id)
    console.log('completed')
    res.data.completed = todo.completed
    ProxyState.todos = [...ProxyState.todos]
  }

  async destroyList(id) {
    let getGone = ProxyState.todos.filter(t => t.id != id)
    await sandbox.delete(`Chris/todos/${id}`, getGone)
    this.getAllTodos()

  }
}
export const todosService = new TodosService()