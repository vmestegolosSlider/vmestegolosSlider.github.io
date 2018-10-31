import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Carousel from './index.vue'
import Card from 'src/components/Card'

const slidesData = [
  { id: 0, title: 'title1' },
  { id: 1, title: 'title2' },
  { id: 2, title: 'title3' },
  { id: 3, title: 'title4' },
  { id: 4, title: 'title5' },
  { id: 5, title: 'title6' }
]

const cardDataFactory = (index) => ({
  id: 423,
  title: `Как повысить транспортную доступность сельских поселений Пестравского района? в ${index + 1} раз`,
  date: '2018-10-25 16:52:00',
  expire: '2018-11-25 16:52:00',
  thumbnail: {
    url: 'https://pp.userapi.com/c848536/v848536148/9ecfc/dR39WRyu51A.jpg'
  }
})
const slidesDataPretty = [
  cardDataFactory(0),
  cardDataFactory(1)
]

storiesOf('components/Carousel', module)
  .add('default', () => ({
    components: {
      Carousel
    },
    template: `
      <Carousel :slidesData="slidesData" @requestLoad="requestLoad">
        <div slot="slide" slot-scope="data">
          {{data.title}}
        </div>
      </Carousel>
    `,
    methods: {
      requestLoad: action('requestLoad')
    },
    data: () => ({
      slidesData
    })
  }))
  .add('with Card slot', () => ({
    components: {
      Carousel,
      Card
    },
    template: `
      <Carousel :slidesData="slidesDataPretty" @requestLoad="requestLoad">
        <Card slot="slide" slot-scope="data" v-bind="data"/>
      </Carousel>
    `,
    methods: {
      requestLoad: action('requestLoad')
    },
    data: () => ({
      slidesData,
      slidesDataPretty
    })
  }))
