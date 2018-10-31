<script>
import Carousel from './index';
import vuex from 'vuex';

export default {
  name: 'CarouselConnected',
  components: {
    Carousel,
  },
  methods: {
    ...vuex.mapActions('votes', {
      requestLoad: 'loadItems'
    })
  },
  computed: {
    ...vuex.mapState('votes', {
      slidesData: (votes) => votes.items
    })
  },
  render(h) {
    return h('carousel', {
      attrs: {
        slidesData: this.slidesData,
      },
      on: {
        requestLoad: this.requestLoad,
      },
      scopedSlots: this.$scopedSlots,
    });
  }
}
</script>