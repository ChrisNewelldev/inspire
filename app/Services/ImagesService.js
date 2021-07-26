import { ProxyState } from "../AppState.js"
import Image from "../Models/Image.js"
import { imagesApi } from "./AxiosService.js"

class ImagesService {
  async getImage() {
    let res = await imagesApi.get()
    ProxyState.images = new Image(res.data);
    console.log(res.data)
  }
}

export const imagesService = new ImagesService()