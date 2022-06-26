export default class Product {
  constructor ({ name, description, imgUrl, price }) {
    this.name = name || ''
    this.description = description || ''
    this.imgUrl = imgUrl || ''
    this.price = price || ''
  }
}
