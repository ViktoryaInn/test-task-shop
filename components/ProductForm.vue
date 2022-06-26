<template>
  <div>
    <form class="form">
      <div class="form-item">
        <input id="productName" class="form-item__input required" placeholder="Введите наименование товара" required>
        <label class="form-item__label" for="productName">Наименование товара</label>
      </div>
      <div class="form-item">
        <textarea id="productDescription" class="form-item__input" placeholder="Введите описание товара" />
        <label class="form-item__label" for="productDescription">Описание товара</label>
      </div>
      <div class="form-item">
        <input id="productImage" class="form-item__input required" placeholder="Введите ссылку" required>
        <label class="form-item__label" for="productImage">Ссылка на изображение товара</label>
      </div>
      <div class="form-item">
        <input id="productPrice" class="form-item__input required" placeholder="Введите цену" required>
        <label class="form-item__label" for="productPrice">Цена товара</label>
      </div>
      <div class="form-item">
        <button type="submit" :class="['submit-btn', isValid ? '--enabled' : '--disabled']">
          Добавить товар
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProductForm',
  computed: {
    isValid () {
      return false
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
      &::placeholder
        color var(--input-placeholder-color)

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

      &.--enabled
        background-color var(--button-color--enabled)
        color var(--txt-button-color--enabled)

textarea.form-item__input
  height 108px
  padding 10px 16px
  resize none
</style>
