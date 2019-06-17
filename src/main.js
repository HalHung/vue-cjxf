/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */

import Vue from 'vue';

/* ============
 * Plugins
 * ============
 *
 * Import and bootstrap the plugins.
 */

import './plugins/vuex';
import './plugins/axios';

// import { i18n } from './plugins/vue-i18n';
import {
  router
} from './plugins/vue-router';
import './plugins/element-ui';
import './plugins/vuex-router-sync';
import './plugins/bootstrap';
import './plugins/font-awesome';
import './plugins/vue-validate';
import './plugins/vue-scrollto';
import './plugins/VueYouTubeEmbed';
import './plugins/vue-ls';
import './plugins/Vuedals';

/* ============
 * Styling
 * ============
 *
 * Import the application styling.
 * Stylus is used for this boilerplate.
 *
 * If you don't want to use Stylus, that's fine!
 * Replace the stylus directory with the CSS preprocessor you want.
 * Import the entry point here & install the webpack loader.
 *
 * It's that easy...
 *
 * http://stylus-lang.com/
 */

import './assets/stylus/app.styl';

/* ============
 * Main App
 * ============
 *
 * Last but not least, we import the main application.
 */

import App from './App';
import store from './store';
// 路由設定
import '@/permission';
Vue.config.productionTip = false;
/* eslint-disable  */
new Vue({
  /**
   * Bind the Vue instance to the HTML.
   */
  el: '#app',
  /**
   * The modal plugin.
   */

  /**
   * The localization plugin.
   */
  // i18n,

  /**
   * The router.
   */
  router,

  /**
   * The Vuex store.
   */
  store,

  /**
   * Will render the application.
   *
   * @param {Function} h Will create an element.
   */
  render: h => h(App),
});
