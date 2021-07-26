import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { todoApi } from "./AxiosService.js";

async postToSandbox(){
  const res = await bcwApi.post('pokemon', ProxyState.activePokemon)
  console.log(new Pokemon(res.data))
}