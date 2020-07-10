import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import axios from "axios"
import store from "./store.js" 

Vue.use(ElementUI);
Vue.config.productionTip = false;


Vue.directive('document-click',{
  bind(el,binding,vnode,oldVnode){
    const {value} = binding 
    document.addEventListener('click',value,false)
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


