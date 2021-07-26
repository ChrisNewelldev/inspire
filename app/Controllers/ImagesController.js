import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";

function _drawBackground() {
  document.getElementById('image').style.backgroundImage = `url(${ProxyState.images.image})`
  //document.getElementById('imagedata').innerHTML = template
}

export default class ImagesController {
  constructor() {
    ProxyState.on('images', _drawBackground, this.getImage());
  }
  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      console.error(error)
    }
  }
}