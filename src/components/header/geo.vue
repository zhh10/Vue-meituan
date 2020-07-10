<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-map-location" />
            {{$store.state.position.name}}
            <router-link to="/City" class="changeCity" >切换城市</router-link>
            [ <a href='#' v-for="(item,index) in nearcity" :key="index">{{ item.name }}  </a>]
        </div>
        <div class="m-user" v-show="! $store.state.userName">
            <router-link class="login" to="/login">立即登录</router-link>
            <router-link class="register" to="/regist">注册</router-link>
        </div>
            <div class="m-user" v-show="$store.state.userName">欢迎你 {{ $store.state.userName }}
            <span class="login" @click='outRegist'>退出登录</span>
        </div>
        
    </div>
</template>

<script>
import getData from "@/components/api/index.js"
export default {
    data(){
        return {
            nearcity:[],
            city:null,
        }
    },
    watch:{
        "$store.state.position":function(){
            // 更改nearCity
            console.log('do something')
        }
    },
    created(){
        getData.getPosition().then(res => {
            this.$store.dispatch('setPosition',res.data.data)
            this.nearcity = res.data.data.nearCity
        })
    },
    methods:{
        outRegist(){
            console.log(123)
            this.$store.dispatch('setUserName',"")
        }
    }
}
</script>

<style>

</style>