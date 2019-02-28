<template>
  <div>
    <h1>{{msg}}</h1>
		<img src="@/img/123.jpg" alt="" width="200" height='200'>
		<router-link to="/jokerl">
			<a href="">跳转</a>
		</router-link>
		<p @click="goto">切换路由</p>
		<input type="text" v-model="val">
		<p>{{val}}</p>
		<div class="tab">
			<a href="javascript:void(0)" v-bind:class="[type==1?'red':'',aaa=='xxx'?'':'']" @click="select(1)">tab1</a>
			<a href="javascript:void(1)" :class="{'red':type==2}" @click="select(2)">tab2</a>
		</div>
		<ul>
			<li v-for="(item,index) in list" :key="index" @click=alert(item)>我是骚亮{{index+1}}</li>
		</ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "你个傻逼",
      val: "",
      type: 1,
			list: [],
			aaa:''
    };
  },
  methods: {
    goto() {
      this.$router.push("/jokerl");
    },
    select(type) {
      console.log(type);
      this.type = type;
		},
		alert(info){
			alert(info)
		}
  },
  created() {
    let sum = 0;
    while (sum < 10) {
			sum += 1;
			let str='我是回家说的话'
			str+=sum
      this.list.push(str);
    }
    console.log(this.list);
  }
};
</script>
<style scoped>
h1 {
  color: red;
}
.tab a:nth-of-type(1) {
  margin-right: 20px;
  font-size: 14px;
}
.red {
  color: orange;
}
</style>


