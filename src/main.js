import Vue from 'vue'
import ToDoBox from './todobox.vue'
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
import 'mint-ui/lib/style.css'

import {mapState,mapMutitons} from 'vuex'
import store from './store'
new Vue({
  el: '#app',
  store,
  render: h => h(ToDoBox)
});
