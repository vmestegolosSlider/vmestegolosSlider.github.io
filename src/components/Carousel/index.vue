<template>
  <swiper :options="swiperOptions" ref="mySwiper" @someSwiperEvent="callback" class="carousel">
    <swiper-slide
    v-for="data in slidesData"
    :key="data.title">
      <slot name="slide" v-bind="data"/>
    </swiper-slide>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import Card from 'src/components/Card';

export default {
  name: "Carousel",
  components: {
    swiper,
    swiperSlide,
    Card,
  },
  props: {
    slidesData: {
      type: Array,
      default: [],
    }
  },
  methods: {
    callback(e) {
      console.log("callback", e);
    }
  },
  data: () => ({
    swiperOptions: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  })
}
</script>

<style lang="scss">
  .carousel {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    &>* {
      margin: 16px;
    }
  }
</style>