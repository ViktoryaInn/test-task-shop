<template>
  <input v-model="localValue" :required="required">
</template>

<script>
export default {
  name: 'InputNumber',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    required: {
      type: Boolean,
      default () {
        return false
      }
    },
    value: {
      type: [Number, String],
      default () {
        return 0
      }
    }
  },
  data () {
    return {
      localValue: null
    }
  },
  watch: {
    value (n, p) {
      if (n === p) {
        return false
      }
      this.localValue = this.parse(n)
    },
    localValue (n, p) {
      if (n === p || n === this.value) {
        return false
      }
      this.$emit('change', this.unParse(n))
    }
  },
  methods: {
    parse (value) {
      const parsed = Number.parseInt(value)
      const result = Number.isNaN(parsed) ? 0 : parsed
      return result.toString().replace(/[^\d]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    },
    unParse (value) {
      value = value || '0'
      return Number(
        value
          .replace(' ', '')
          .replace(/[.,]/, '.')
          .replace(/[^\d.]/g, '')
      )
    },
    view (value) {
      return Number.parseInt(value).toLocaleString('ru')
    }
  }
}
</script>
