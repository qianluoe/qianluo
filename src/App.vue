<template>
  <div>
    <h1>这是 App 组件</h1>
    <button type="button" class="mui-btn mui-btn-primary">蓝色</button>
    
    <mt-button icon="back">back</mt-button>
    <mt-button plain>plain</mt-button>
    <mt-button type="default" @click=toast>default</mt-button>
  
    <router-link to="/account">Account</router-link>
    <router-link to="/goodslist">Goodslist</router-link>

    <router-view></router-view>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';


	export default({
		data(){
			return{
			msg:'ok'
			}
		},
		methods:{
			toast(){
				Toast('提示信息');
			}
		}
	})
</script>
<style scoped>
	
</style>