<template>
  <div>
    <form class="form">
      <div class="form-item">
        <input id="name" v-model="model.name" class="form-item__input required" placeholder="Введите наименование товара" required>
        <label class="form-item__label" for="name">Наименование товара</label>
      </div>
      <div class="form-item">
        <textarea id="description" v-model="model.description" class="form-item__input" placeholder="Введите описание товара" />
        <label class="form-item__label" for="description">Описание товара</label>
      </div>
      <div class="form-item">
        <input id="imgUrl" v-model="model.imgUrl" class="form-item__input required" placeholder="Введите ссылку" required>
        <label class="form-item__label" for="imgUrl">Ссылка на изображение товара</label>
      </div>
      <div class="form-item">
        <input-number id="price" v-model="model.price" class="form-item__input required" required />
        <label class="form-item__label" for="price">Цена товара</label>
      </div>

      <div class="form-item">
        <button type="button" :class="['submit-btn', isValid ? '--enabled' : '--disabled']" @click="addProduct()">
          Добавить товар
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Product from '~/models/Product'
import InputNumber from '~/components/InputNumber'

export default {
  name: 'ProductForm',
  components: { InputNumber },
  data () {
    return {
      model: new Product({})
    }
  },
  computed: {
    isValid () {
      return this.model.name && this.model.imgUrl && this.model.price
    }
  },
  methods: {
    addProduct () {
      if (this.isValid) {
        this.$store.dispatch('addProduct', this.model)
        this.model = new Product({})
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.form
  width 100%
  padding 24px
  background-color #FFFFFF
  border-radius 4px
  box-shadow 0 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02)
  &-item
    margin-top 16px
    display flex
    flex-direction column-reverse
    &__label
      margin-bottom 4px
      font-family 'Source Sans Pro'
      font-weight 400
      font-size 10px
      color var(--input-label-color)

    &__input
      width 100%
      height var(--controls-height)
      padding 10px 16px
      border none
      border-radius 4px
      background-color #FFFFFF
      box-shadow 0 2px 5px rgba(0, 0, 0, 0.1)
      font-family 'Source Sans Pro'
      font-weight 400
      font-size var(--control-fs)
      color var(--txt-color)
      transition box-shadow 0.5s
      &::placeholder
        color var(--input-placeholder-color)
      &:invalid
        border 1px solid var(--negative-color)
      &:hover
        box-shadow 0 2px 15px rgba(0,0,0,0.1)
      &:focus
        box-shadow 0 2px 15px rgba(0,0,0,0.1)
      &:active
        box-shadow 0 2px 15px rgba(0,0,0,0.1)

      &.required + .form-item__label::after
        content ''
        width 4px
        height 4px
        display inline-block
        background-color var(--negative-color)
        border-radius 50%
        position relative
        left 2px
        right 0
        bottom 6px

    &:first-child
      margin-top 0

    & .submit-btn
      width 100%
      height var(--controls-height)
      margin-top 24px
      border none
      border-radius 10px
      font-family 'Source Sans Pro'
      font-weight 600
      font-size var(--control-fs)
      &.--disabled
        background-color var(--button-color--disabled)
        color var(--txt-button-color--disabled)
        transition color 0.5s, box-shadow 0.5s
        &:hover
          color #8f8f8f
          box-shadow 0 2px 4px rgba(0,0,0,0.2)
        &:active
          box-shadow 0 0 2px rgba(0,0,0,0.3)
          color #8f8f8f

      &.--enabled
        background-color var(--button-color--enabled)
        color var(--txt-button-color--enabled)
        transition background-color 0.5s, box-shadow 0.5s
        &:hover
          box-shadow 0 2px 4px rgba(0,0,0,0.2)
        &:active
          background-color #6da166
          box-shadow 0 0 2px rgba(0,0,0,0.3)

textarea.form-item__input
  height 108px
  padding 10px 16px
  resize none
  &:hover
    box-shadow 0 2px 15px rgba(0,0,0,0.1)
  &:focus
    box-shadow 0 2px 15px rgba(0,0,0,0.1)
  &:active
    box-shadow 0 2px 15px rgba(0,0,0,0.1)
</style>
