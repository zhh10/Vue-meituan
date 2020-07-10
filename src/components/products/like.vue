<template>
    <div class="like-item">
        <h4>猜你喜欢</h4>
        <r-item v-for="(item,index) in recommendList" 
        :key="index"
        :item="item"
        ></r-item>
    </div>
</template>

<script>
import getData from "@/components/api/index.js"
import rItem from "@/components/products/recommendItem.vue"
export default {
    components:{
        rItem
    },
    data(){
        return {
            recommendList:[]
        }
    },
    created(){
        getData.getRecommend().then(res => {
            this.recommendList = res.data.data
            console.log(this.recommendList)
    })
    },

}
</script>

<style lang="scss">
//    @import "@/assets/css/products/likeitem.scss";
</style>