<template>
  <div id="app">
  
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  mounted () {
    this.$api.get('/algumacoisa/teste')
    .then(({ data }) => console.log(data))
    .catch(err => console.log(err))
  }
}
</script>

<style lang="scss">

</style>
