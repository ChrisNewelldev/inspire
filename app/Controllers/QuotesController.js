import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";

function _drawQuote() {
  document.getElementById('quote').innerHTML = `<span>${ProxyState.quotes.content}</span><h5>${ProxyState.quotes.author}</h5>`

}

export default class QuotesController {
  constructor() {
    ProxyState.on('quotes', _drawQuote, this.getQuote());
  }

  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      console.error(error)
    }
  }

}