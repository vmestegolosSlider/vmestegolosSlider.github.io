<template>
  <div id="app">
    <CarouselConnected>
        <Card
        slot="slide"
        slot-scope="data"
        v-bind="data"
        />
    </CarouselConnected>
  </div>
</template>

<script>
import CarouselConnected from './components/Carousel/connected'
import Card from './components/Card'

export default {
  name: 'app',
  components: {
    CarouselConnected,
    Card
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F0F0F0;
  min-height: 100vh;
  padding: 40px 0;
  box-sizing: border-box;
}
</style>
