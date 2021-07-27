

export default class Todo {
  constructor({ id = generateId, completed, user, description, value = 1 }) {
    this.id = id
    this.completed = completed || false
    this.user = user
    this.description = description
    this.value = value
  }


  get Template() {
    return `
      


    <form class="list">
     <div class="form-check"> 
        <input class="form-check-input" type="checkbox" onclick="app.todosController.checked('${this.id}')" $this.completed ? 'checked' : ''}>
                         
       '${this.description}'<button class="btn btn-success" onclick="app.todosController.destroyTodo('${this.id}')">delete </button>
                        
                </form>
    `
  }
}
