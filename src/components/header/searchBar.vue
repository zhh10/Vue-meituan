<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <a href="/index"><img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt=""></a>
            </el-col>
            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="searchword" @focus="focusInput" @blur="blurInput" @input="input" placeholder="输入商家或地点"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-show="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd><router-link to="/">川西坝子</router-link></dd>
                        <dd><router-link to="/">重庆火锅</router-link></dd>
                        <dd><router-link to="/">海底捞</router-link></dd>
                    </dl>
                    <dl class="searchList" v-show="isSearchList"> 
                        <!-- <dd><router-link to="/">波士顿大龙虾</router-link></dd>
                        <dd><router-link to="/">帝王蟹</router-link></dd>
                        <dd><router-link to="/">佛跳墙</router-link></dd>  -->
                        <dd v-for="(item,index) in searchContent" :key="index"  @click="clickInput(item)"><router-link to="/">{{ item }}</router-link></dd>
                    </dl>
                 </div>
                 <p class="suggest"> 
                    <router-link to="/" v-for="(item,index) in hotPlace" :key="index">{{ item }}</router-link>
                </p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import getData from "@/components/api/index.js"
import axios from "axios"
import $ from 'jquery'
export default {
    data(){
        return {
            searchword:"",
            isSearchList:false,
            isHotPlace:false,
            hotPlace : [],
            searchContent:[]
        }
    },
    created(){
        getData.getHotPlace().then(res => {
            this.hotPlace = res.data.data
        })
    },
    methods:{
        focusInput(){
            this.isHotPlace = true
        },
        input(){
            const val = this.searchword
            this.isSearchList = true;
            this.isHotPlace = false;
            getData.getSearchData().then((res) => {
                this.searchContent = res.data.data.list.filter((item,index)=> {
                    return item.indexOf(val) > -1
                })
            })

        },
        blurInput(){
            setTimeout(()=>{
                this.isSearchList = false ;
                this.isHotPlace = false ;
            },200)
        },
        clickInput(val){
            this.searchword=val
        }

    }
}
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>