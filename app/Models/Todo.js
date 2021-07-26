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
                    </div>${data.description}list<button class="btn"
                        onclick="app.todosController.deleteTodo('${data.id}')">
                        delete </button>
                    <input type="text" placeholder="Write a to do.." />
                    <button type="submit" class="btn">Add Todo</button>
                </form>
    `
  }
}
