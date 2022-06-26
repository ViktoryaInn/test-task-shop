<template>
  <div class="card-wrapper">
    <button type="button" class="delete-btn" />
    <div class="card">
      <div class="card-img">
        <img alt="product image" src="https://images.unsplash.com/photo-1655929947078-263a3dea40aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
      </div>
      <div class="card-inner">
        <div class="card-header">
          <h5 class="card-title">
            Наименование товара
          </h5>
        </div>
        <div class="card-body">
          <p class="card-text">
            Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк в несколько строк в несколько строк в несколько строк
          </p>
        </div>
        <div class="card-footer">
          <p class="cost">
            10 000 руб.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard'
}
</script>

<style lang="stylus" scoped>
  .card
    width 100%
    min-height 423px
    background-color #FFFEFB
    border-radius 4px
    box-shadow 0 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02)
    overflow hidden
    &-img
      width 100%
      height 200px
      object-fit cover
      overflow hidden

    &-inner
      height calc(100% - 200px)
      padding 16px 16px 24px
      display flex
      flex-direction column
      justify-content: space-between
      gap 16px
      color var(--txt-color)

    &-title
      margin 0
      padding 0
      font-size 20px
      color var(--txt-color)
      font-weight 600

    &-body
      flex 1 1 auto
      word-wrap break-word

    &-text
      margin 0
      padding 0
      font-size 16px
      font-weight 400

    &-wrapper
      width 100%
      height fit-content
      position relative
      & .delete-btn
        width 32px
        height 32px
        border none
        border-radius 10px
        background var(--negative-color) url('../assets/icons/delete.png') no-repeat
        background-size 16px 16px
        background-position center
        visibility collapse
        opacity 0
        position absolute
        top -8px
        right -8px
        transition opacity 0.3s
        &:hover
          background-color #ff6e6e
        &:active
          background-color #ff6e6e
          box-shadow inset 0 0 15px rgba(217, 104, 104, 0.79)
      &:hover
        & .delete-btn
          visibility visible
          opacity 1

  .cost
    margin 0
    font-weight 600
    font-size 24px
    color var(--txt-color)

</style>
