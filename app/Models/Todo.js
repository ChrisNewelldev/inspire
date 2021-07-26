export default class Todo {
  constructor(data) {
    this.id = data.id,
      this.completed = data.completed,
      this.description = data.description,
      this.user = data.user
  }

  get Template() {
    return `
    <li>${this.description}</li>
    <button class="btn btn-danger" onclick="app.todosController.deleteTodo('${this.id}')"> delete </button>
    `


  }



}
