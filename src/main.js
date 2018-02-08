import $ from 'jquery'
import "bootstrap/dist/css/bootstrap.css"
import "./css/index.css"
import "./css/index.css"
import "./lib/mui/css/mui.min.css"
import Vue from 'vue'
Vue.use(VueRouter)
import { Button} from 'mint-ui'
Vue.component(Button.name, Button)
import VueRouter from 'vue-router'
import app from './App.vue'
import router from './router.js'


$(function(){
	$('li:odd').css('backgroundColor','yellow');
	$('li:even').css('backgroundColor','green');

})

var vm = new Vue({

      el: '#app',

      render: c => c(app),
      router

    });