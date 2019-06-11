<template>
  <button v-on:click="count++" class="btn-style">You clicked me {{ count }} times.</button>
</template>

<script>
export default {
  name: 'TestUiBtn',
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-style {
  margin: 5px;
  padding: 5px 10px;
  color: #333;
  font-size: 14px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
}
</style>
