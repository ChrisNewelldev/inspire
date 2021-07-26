export default class Image {
  constructor({ largeImgUrl, author, tags, query }) {
    this.image = largeImgUrl
    this.tags = tags
    this.author = author
    this.query = query
  }
}

//get Template() {
 // return `
 // <h4>${this.tags}</h4>
 // <p>${this.author}</p>
 // <p>${this.query}</p>
 // `
//}