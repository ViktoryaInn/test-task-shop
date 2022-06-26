import Product from '~/models/Product'

export const state = () => ({
  products: []
})

export const mutations = {
  ADD_PRODUCT (s, product) {
    s.products.push(product)
  }
}

export const actions = {
  addProduct ({ commit }, product) {
    commit('ADD_PRODUCT', new Product(product))
  }
}

export const getters = {
  products: s => s.products
}
