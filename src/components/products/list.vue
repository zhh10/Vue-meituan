<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" 
      :key="item.key"
      @click="handleClick(item.key)"
      :class="{'s-nav-active': isshow === item.key}">{{ item.name }}</li>
    </ul>
    <el-row>
      <el-col>
        <!-- 组件复用 -->
        <!-- 动态路由 -->
        <!-- 或者 相似结构 父组件传入数据 -->
        <item v-for="(item,index) in productList" :key="index" :meta="item"></item>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Item from "@/components/products/item.vue"
import getData from "@/components/api/index.js"
export default {
  components:{Item},
  data(){
    return {
      isshow : 's-default',
      nav:[{
        key:'s-default',
        name:'智能排序',
        active:true
      },{
        key:'s-score',
        name:'人气最高',
        active:false
      },{
        key:'s-comment',
        name:'评价最高',
        active:false
      }],
      productList:[]
    }
  },
  methods:{
    handleClick(val){
      this.isshow = val
    }
  },
  created(){
    getData.getGoodsList().then(res => {
      this.productList = res.data.data
    })

  }
}
</script>

<style>

</style>