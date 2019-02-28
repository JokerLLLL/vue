<template>
  <div>
    <h1>{{msg}}</h1>
		<img src="@/img/123.jpg" alt="" width="200" height='200'>
    <aaa />
  </div>
</template>
<script>
import  AAA  from "@/components/AAA";
export default {
  data() {
    return {
      msg: "two dog"
    };
  },
  created() {
    document.title = "啊哈哈哈哈哈啊";
  },
  components: {
    aaa:AAA
  }
};
</script>
<style scoped>
h1 {
  color: red;
}
</style>


