import { storiesOf } from '@storybook/vue';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Carousel from './index.vue';
import Card from 'src/components/Card';

const slidesData = [
  { title: "title1", },
  { title: "title3", },
  { title: "title4", },
  { title: "title5", },
  { title: "title6", },
];

const cardData = {
  title: "Как повысить транспортную доступность сельских поселений Пестравского района?",
  date: "2018-10-25 16:52:00",
  expire: "2018-11-25 16:52:00",
  thumbnailSrc: "https://pp.userapi.com/c848536/v848536148/9ecfc/dR39WRyu51A.jpg",
};
const slidesDataPretty = [
  cardData,
  cardData,
  cardData,
  cardData,
  cardData,
];

storiesOf('components/Carousel', module)
  .add('default', () => ({
    components: {
      Carousel,
    },
    template: `
      <Carousel :slidesData="slidesData">
        <div slot="slide" slot-scope="data">
          {{data.title}}
        </div>
      </Carousel>
    `,
    data: () => ({
      slidesData,
    }),
  }))
  .add('with Card slot', () => ({
    components: {
      Carousel,
      Card,
    },
    template: `
      <Carousel :slidesData="slidesDataPretty">
        <Card slot="slide" slot-scope="data" v-bind="data"/>
      </Carousel>
    `,
    data: () => ({
      slidesData,
      slidesDataPretty,
    }),
  }));