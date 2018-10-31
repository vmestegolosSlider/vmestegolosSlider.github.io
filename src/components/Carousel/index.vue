<template>
  <swiper :options="swiperOptions" ref="mySwiper" @slideChange="slideChange" class="carousel">
    <swiper-slide
    v-for="data in slidesData"
    :key="data.id">
      <slot name="slide" v-bind="data"/>
    </swiper-slide>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

const slidesPerView = 3;

export default {
  name: "Carousel",
  components: {
    swiper,
    swiperSlide,
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
      perPage: slidesPerView * 2,
      page: 0
    });
  },
  methods: {
    slideChange() {
      const moreLoadedSlides = this.slidesData.length - this.activeIndex;

      if (moreLoadedSlides <= (slidesPerView + slidesPerView)) {
        this.emitRequestLoad({
          perPage: slidesPerView,
          page: Math.floor(this.slidesData.length / slidesPerView) + 2
        });
      }
    },
    emitRequestLoad(...args) {
      this.$emit('requestLoad', ...args);
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
    &>* {
      margin: 16px;
    }
  }
</style>