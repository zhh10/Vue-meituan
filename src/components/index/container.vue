<template>
    <div class="m-istyle">
        <dl :class="nav.class">
            <dt>{{ nav.title }}</dt>
            <dd v-for="(item,index) in nav.list" 
            :key="index" 
            :class="{active:activeIndex === index}"
            @mouseenter="handleMouse(index,item.tab)">{{ item.text }}</dd>
        </dl>
        <ul class="ibody">
            <li v-for="(item,index) in newContent" :key="index">
                <el-card :body-style="{ padding: '0px' }" shadow="never">
                    <img :src="item.image" :alt="item.title" class="image">
                    <div class="cbody">
                        <div class="title">{{ item.title }}</div>
                        <div class="sub-title">{{ item.subTitle }}</div>
                        <div class="price-info">
                            <span class="current-price-wrapper">
                                <span class="price-symbol numfont">￥</span>
                                <span class="current-price numfont">{{ item.price }}</span>
                            </span>
                            <span class="sold bottom-right-info">{{ item.address }}</span>
                        </div>
                    </div>
                </el-card>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "@/components/api/index.js"
export default {
    props:['nav'],
    data(){
        return {
            activeIndex : 0,
            activetab : 'all',
            totalContent:[],
            // content:[],
        }
    },
    computed:{
        newContent(){
            return this.totalContent[this.activetab]
        }
    },
    created(){
        axios.getContent().then(res=>{
            this.totalContent = res.data.data
        })
    },
    methods:{
        handleMouse(val,tab){
            this.activeIndex = val
            this.activetab = tab
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>