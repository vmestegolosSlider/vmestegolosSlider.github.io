import { storiesOf } from '@storybook/vue';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Card from './index.vue';

storiesOf('components/Card', module)
  .add('default', () => ({
    components: {
      Card,
    },
    template: '<Card v-bind="props"/>',
    data: () => ({
      props: {
        title: "Как повысить транспортную доступность сельских поселений Пестравского района?",
        date: "2018-10-25 16:52:00",
        expire: "2018-11-25 16:52:00",
        thumbnailSrc: "https://pp.userapi.com/c848536/v848536148/9ecfc/dR39WRyu51A.jpg",
      }
    }),
  }));