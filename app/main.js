import ImagesController from "./Controllers/ImagesController.js";
import QuotesController from "./Controllers/QuotesController.js";
import TodosController from "./Controllers/TodosController.js";
import WeathersController from "./Controllers/WeathersController.js";

class App {
  imagesController = new ImagesController();
  quotesController = new QuotesController();
  todosController = new TodosController();
  weathersController = new WeathersController()
}

window["app"] = new App();


