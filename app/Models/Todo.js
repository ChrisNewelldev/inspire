export default class Todo {
  constructor(data) {


    this.id = data.id
    this.completed = data.completed

    this.user = data.user

    this.description = data.description
  }


  get Template() {
    return `
    <form class="list">
                    <div class="form-check">
                        <input class="form-check-input position-static" type="checkbox" id="blankCheckbox"
                            value="option1" aria-label="...">
                    </div>${this.description}<button class="btn"
                        onclick="app.todosController.deleteTodo('${this.id}')">
                        delete </button>
                </form>
    `
  }
}
