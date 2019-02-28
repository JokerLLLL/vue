<template>
    <div>
        <div class="list">
            <div class="item" v-for="(item,index) in list" :key="index">
                <span>{{item}}</span>
                <span>></span>
            </div>
        </div>
				<div class="btn">保存直播设置</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["码率", "分辨率", "帧数"]
    };
  }
};
</script>

<style scoped>
.list {
  width: 100vw;
  box-sizing: border-box;
  padding: 0 20px;
}
.item {
  display: flex;
  justify-content: space-between;
	align-items: center;
  width: 100%;
	height: 52px;
	border-bottom:1px solid rgba(202,213,222,0.5);
}
.btn{
	margin: 45px auto 0;
	width: calc(100vw - 40px);
	height: 38px;
	border-radius: 4px;
	background-color: red;
	line-height: 38px;
	text-align: center;
	font-size: 16px;
	color: #fff;
	font-weight: 500;
}
</style>


