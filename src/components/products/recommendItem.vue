<template>
  <div>
    <div>
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587726141286&di=e8c05cd18312ddd4a1020ce296276444&imgtype=0&src=http%3A%2F%2Farticle-fd.zol-img.com.cn%2Ft_s640x2000%2Fg2%2FM00%2F0E%2F0E%2FChMlWVzP7PWIO99bAADDUcie__kAAJ1UQFZMacAAMNp187.jpg"
        :alt="item.title"
      />
    </div>
    <p class="name">{{ item.title }}</p>
    <p class="desc">{{ item.areaName }}</p>

    <p>
      <el-rate v-model="item.score" 
      disabled 
      show-score 
      text-color="#ff9900" 
      score-template="{value}"></el-rate>
      <span class="price">￥{{ item.avgPrice }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang='scss'>
@import "@/assets/css/products/likeitem.scss";
</style>