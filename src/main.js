import Vue from 'vue';
import App from './App';
import router from './router';

import 'common/stylus/index.styl';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
});
