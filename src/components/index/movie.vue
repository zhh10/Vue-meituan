<template>
  <div class="m-imovie">
    <dl :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item,index) in nav.list"
        :key="index"
        :class="{active:activeIndex === index}"
      >{{ item.text }}</dd>
    </dl>
    <div class="ibody">
      <ul class="body">
        <li v-for="(item,index) in movieList" :key="index">
          <a :href="item.url" target="_blank">
            <img :src="item.img" :alt="item.name" />
          </a>
          <div class="info">
              <p class="score">
                  <span class="num">{{ item.num }}</span>人想看
              </p>
              <p class="name">{{ item.name }}</p>
          </div>
        </li>
      </ul>
      <div>
        <i @click="handleLeftBtn" class="btn el-icon-caret-left"></i>
        <i @click="handleRightBtn" class="btn el-icon-caret-right"></i>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ["nav"],
  data() {
    return {
      activeIndex: 0,
      movieList: [
        {
          url: "https://maoyan.com/films/1280270",
          img:
            "//p0.meituan.net/moviemachine/0c3f4cd8caf0f0848a54e3081349bdac22615677.jpg@267w_371h_1e_1c",
          num: 11786,
          name: "魔法学院"
        },
        {
          url: "https://maoyan.com/films/1302281",
          img:
            "//p1.meituan.net/moviemachine/1d2b4985d0187b437d41a73994ba2e191607376.jpg@267w_371h_1e_1c",
          num: 6778,
          name: "奇妙王国之魔法奇缘"
        },
        {
          url: "https://maoyan.com/films/1302405",
          img:
            "//p0.meituan.net/movie/81fe2197ef930c79624a28cc76c423835264620.png@267w_371h_1e_1c",
          num: 6135,
          name: "小公主艾维拉与神秘王国2"
        },
        {
          url: "https://maoyan.com/films/1292570",
          img:
            "//p1.meituan.net/moviemachine/e10ceb90d2c06d3524d01d573ccf88fb7514998.jpg@267w_371h_1e_1c",
          num: 16331,
          name: "金禅降魔"
        },
        {
          url: "https://maoyan.com/films/1262874",
          img:
            "//p0.meituan.net/movie/1907a5af889e44236fd80952980d36e13257090.jpg@267w_371h_1e_1c",
          num: "4773",
          name: "82号古宅"
        },
        {
          url: "https://maoyan.com/films/665702",
          img:
            "//p1.meituan.net/movie/eb37c5b78ec0c14aaad707700fcc1443390529.jpg@267w_371h_1e_1c",
          num: "988",
          name: "恋上美人鱼"
        },
        {
          url: "https://maoyan.com/films/1318812",
          img:
            "//p0.meituan.net/movie/6adbe9c365a3aaadfb65910bc279bf6a3385927.jpg@267w_371h_1e_1c",
          num: "589",
          name: "沉香"
        }
      ]
    };
  },
  methods:{
      handleLeftBtn(){
          var ul = document.getElementsByClassName('body')[0]
          if(parseInt(getComputedStyle(ul).left)===0){
              return ;
          }else{
              ul.style.left = 0 +'px';
          }
      },
      handleRightBtn(){
          console.log('right')
          var ul = document.getElementsByClassName('body')[0]
          if(parseInt(getComputedStyle(ul).left)===-1165){
              return ;
          }else{
              ul.style.left = -1160 + 'px'
          }
      }
  }
};
</script>

<style lang="scss">
// @import "@/assets/css/index/artistic.scss";
@import "@/assets/css/index/movie.scss";
</style>