import VueRouter from 'vue-router'

// 导入 Account 组件
import Account from './main/Account.vue'
import GoodList from './main/GoodList.vue'

import login from './rnest/login.vue'
import register from './rnest/register.vue'

// 导入Account的两个子组件
var router = new VueRouter({
  routes: [
  	// {path: '',direct:'/account'}
    // account  goodslist
    {path: '/account',
    component: Account,
	children: [
        { path: 'login', component: login },
        { path: 'register', component: register }
      ]
	},
    {path: '/goodslist', component: GoodList }
  ]
})
export default router