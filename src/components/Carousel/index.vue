<template>
  <swiper :options="swiperOptions" ref="mySwiper" @slideChange="slideChange" class="carousel">
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

const slidesPerView = 3;

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
  mounted() {
    if (this.slidesData.length >= 2 * slidesPerView) {
      return
    }
    this.emitRequestLoad({
      offset: this.slidesData.length,
      limit: slidesPerView,
    });
  },
  methods: {
    slideChange() {
      console.log("slideChange", this.activeIndex);
      const moreLoadedSlides = this.slidesData.length - this.activeIndex;

      if (moreLoadedSlides <= slidesPerView ) {
        this.emitRequestLoad({
          offset: this.slidesData.length,
          limit: slidesPerView,
        });
      }
    },
    emitRequestLoad({offset, limit}) {
      this.$emit('requestLoad', {offset, limit});
    }
  },
  computed: {
    activeIndex() {
      return this.$refs.mySwiper.swiper.activeIndex;
    },
  },
  data: () => ({
    swiperOptions: {
      slidesPerView,
      spaceBetween: 16,
    },
  }),
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