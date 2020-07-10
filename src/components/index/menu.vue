<template>
  <div class="m-menu">
      <dl class="nav">
        <dt>全部分类</dt>
        <dd @mouseenter="handleMouseEnter('1')" @mouseleave="handleMouseLeave"><i class="takeout"></i><a href="">外卖</a><span class="arrow"></span></dd>
        <dd @mouseenter="handleMouseEnter('0')" @mouseleave="handleMouseLeave"><i class="food"></i><a href="">美食</a><span class="arrow"></span></dd>
        <dd @mouseenter="handleMouseEnter('2')" @mouseleave="handleMouseLeave"><i class="hotel"></i><a href="">酒店</a><span class="arrow"></span></dd>
        <dd><i class="homestay"></i><a href="">民宿</a><span class="arrow"></span></dd>
        <dd><i class="movie"></i><a href="">猫眼电影</a><span class="arrow"></span></dd>
        <dd><i class="airport"></i><a href="">机票</a><span>/</span><a href="">火车票</a><span class="arrow"></span></dd>
        <dd><i class="ktv"></i><a href="">休闲娱乐</a><span>/</span><a href="">KTV</a><span class="arrow"></span></dd>
        <dd><i class="life"></i><a href="">生活服务</a><span class="arrow"></span></dd>
        <dd><i class="hair"></i><a href="">丽人</a><span>/</span><a href="">美发</a><span>/</span><a href="">医学美容</a><span class="arrow"></span></dd>
        <dd><i class="marry"></i><a href="">结婚</a><span>/</span><a href="">婚纱摄影</a><span>/</span><a href="">婚宴</a><span class="arrow"></span></dd>
        <dd><i class="offspring"></i><a href="">亲子</a><span>/</span><a href="">儿童乐园</a><span>/</span><a href="">幼教</a><span class="arrow"></span></dd>
        <dd><i class="sport"></i><a href="">运动健康</a><span>/</span><a href="">健身中心</a><span class="arrow"></span></dd>
        <dd><i class="furniture"></i><a href="">家装</a><span>/</span><a href="">建材</a><span>/</span><a href="">家居</a><span class="arrow"></span></dd>
        <dd><i class="study"></i><a href="">学习培训</a><span>/</span><a href="">音乐培训</a><span class="arrow"></span></dd>
        <dd><i class="health"></i><a href="">医疗健康</a><span>/</span><a href="">宠物</a><span>/</span><a href="">爱车</a><span class="arrow"></span></dd>
        <dd><i class="bar"></i><a href="">酒吧</a><span>/</span><a href="">密室逃脱</a><span class="arrow"></span></dd>
      </dl>
      <div v-if="secondNav" @mouseenter="secondMouseEnter" @mouseleave="secondMouseLeave" class="detail">
          <h4>{{ secondNav.title }}</h4>
          <span v-for="(item,index) in secondNav.items" :key="index">{{ item }}</span>
      </div>
  </div>
</template>

<script>
import getData from "@/components/api/index.js"
export default {
  data(){
    return {navData:[],
            secondNav:null}
  },
  created(){
    getData.getMenuData().then(res => {
      this.navData = res.data.data 
    })
  },
  methods:{
    handleMouseEnter(val){
      this.secondNav = this.navData[val].items[0]
      if(this.timer){
        clearTimeout(this.timer)
      }
      
    },
    handleMouseLeave(){
      this.timer = setTimeout(()=>{
        this.secondNav = null
      },600)
      console.log('leave')
    },
    secondMouseEnter(){
      clearTimeout(this.timer)
    },
    secondMouseLeave(){
      this.secondNav = null
    }
  }
  
}
</script>

<style>

</style>