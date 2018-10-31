<template>
  <a
  :href="href"
  class="card"
  target="_blank"
  rel="noopener noreferrer"
  @dragstart.prevent
  >
    <p class="card__time">
      {{timeDurationText}}
    </p>

    <img :src="thumbnail.url" alt="Vote thumbnail" class="card__thumbnail">

    <p class="card__title">
      {{title}}
    </p>

    <p class="card__actiontext">
      Перейти
    </p>
  </a>
</template>

<script>
import { format } from 'date-fns'
import ru from 'date-fns/locale/ru'

export default {
  name: 'Card',
  props: {
    id: {type: Number, required: true},
    title: {type: String, required: true},
    date: {type: String, required: true},
    expire: {type: String, required: true},
    thumbnail: {type: Object, required: true}
  },
  computed: {
    href() {
      return `https://vmeste-region.ru/votes/${this.id}`;
    },
    timeDurationText() {
      const actualYear = (new Date).getUTCFullYear()
      const from = new Date(this.date)
      const to = new Date(this.expire)

      const displayYear = (actualYear !== from.getUTCFullYear()) || (actualYear !== to.getUTCFullYear())

      const myFormat = (d) => format(d, displayYear ? 'D MMMM YYYY' : 'D MMMM', { locale: ru })

      return `С ${myFormat(from)} по ${myFormat(to)}`
    }
  }
}
</script>

<style lang="scss">
  .card {
    display: block;

    background-color: white;
    max-width: 360px;
    padding: 24px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.16);

    transition: 150ms;
    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);

      &>.card__actiontext {
        text-decoration: underline;
      }
    }

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-decoration: initial;
    color: initial;

    p {
      margin: 0;
    }

    .card__time {
      font-size: 14px;
      line-height: 17px;
      font-weight: 400;
    }

    .card__thumbnail {
      object-fit: cover;
      height: 200px;
      width: 100%;
      margin-top: 16px;
    }

    .card__title {
      margin-top: 24px;
      font-size: 18px;
      line-height: 29px;
      font-weight: 500;
    }

    .card__actiontext {
      margin-top: 24px;
      color: #0077FF;
      font-size: 16px;
      line-height: 19px;
      font-weight: 500;
    }
  }
</style>
