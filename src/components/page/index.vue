<template>
  <div class="page-index">
      <el-row>
          <el-col :span="5">
              <m-menu />
          </el-col>
          <el-col :span="19">
              <m-life />
          </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
              <m-movie :nav="isMovie" />
        </el-col>
      </el-row>
      <el-row>
          <el-col :span="24">
              <container :nav="isStyle" />
          </el-col>
      </el-row>
  </div>
</template>

<script>
import mMenu from '@/components/index/menu.vue'
import mLife from '@/components/index/life.vue'
import container from "@/components/index/container.vue"
import mMovie from "@/components/index/movie.vue"
export default {
    data(){
        return {
            isStyle:{
                class:'istyle',
                title:'有格调',
                list:[{
                    text:'全部',
                    tab:'all'
                },{
                    text:'约会聚餐',
                    tab:'food'
                },{
                    text:'电影演出',
                    tab:'movie',
                },{
                    text:'丽人SPA',
                    tab:'spa'
                },{
                    text:'品质出游'
                }]
            },
            isMovie:{
                class:'imovie',
                title:'猫眼电影',
                list:[{
                    text:'即将上映'
                }]
            }
        }
    },
    components:{
        mMenu,
        mLife,
        container,
        mMovie
    }
}
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";

</style>