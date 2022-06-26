<template>
  <div class="content-holder">
    <div class="content-header">
      <h2>Добавление товара</h2>
      <div class="select-wrapper">
        <select class="select" name="sorting">
          <option class="select__option" value="default" selected>
            По умолчанию
          </option>
          <option class="select__option" value="alphabet">
            А - Я
          </option>
          <option class="select__option" value="alphabet-reverse">
            Я - А
          </option>
        </select>
      </div>
    </div>
    <div class="content-body">
      <div class="row">
        <div class="col-12 col-xl-3">
          <product-form />
        </div>
        <div class="col-12 col-xl-9">
          <div class="row">
            <div class="col-xxs-12 col-xs-12 col-sm-6 col-lg-4">
              <product-card />
            </div>
            <div class="col-xxs-12 col-xs-12 col-sm-6 col-lg-4">
              <product-card />
            </div>
            <div class="col-xxs-12 col-xs-12 col-sm-6 col-lg-4">
              <product-card />
            </div>
            <div class="col-xxs-12 col-xs-12 col-sm-6 col-lg-4">
              <product-card />
            </div>
            <div class="col-xxs-12 col-xs-12 col-sm-6 col-lg-4">
              <product-card />
            </div>
            <div class="col-xxs-12 col-xs-12 col-sm-6 col-lg-4">
              <product-card />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '~/components/ProductCard'
import ProductForm from '~/components/ProductForm'
export default {
  name: 'IndexPage',
  components: { ProductForm, ProductCard }
}
</script>

<style lang="stylus">
h2
  margin 0
  font-size 28px
  color var(--txt-color)

.content
  &-holder
    width 100%
    height 100vh
    background-color rgba(255, 254, 251, 0.8);
    padding 32px 32px 0
  &-header
    margin-bottom 16px
    display flex
    justify-content space-between
    align-items center

.select
  min-width 120px
  height var(--controls-height)
  padding 10px 28px 10px 16px
  border none
  border-radius 4px
  background-color #FFFEFB
  box-shadow 0 2px 5px rgba(0, 0, 0, 0.1)
  font-family 'Source Sans Pro'
  font-weight 400
  font-size var(--control-fs)
  color var(--txt-select-color)
  -moz-appearance none /* Firefox */
  -webkit-appearance none /* Safari and Chrome */
  appearance none
  &-wrapper
    width fit-content
    &::after
      content ''
      width 5px
      height 5px
      border-width 0 1px 1px 0
      border-style solid
      border-color var(--txt-select-color)
      display inline-block
      transform rotate(45deg)
      position relative
      right 16px
      bottom 2px
  &__option
    height var(--controls-height)
</style>
