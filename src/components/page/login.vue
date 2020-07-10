<template>
    <div class="page-login">
        <div class="login-header">
            <a  href="/index">
                <img class="logo" src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" 
                alt="美团">
            </a>
        </div>
        <div class="login-panel">
            <div class="banner">
                <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
            </div>
            <div class="form">
                <p>
                    <span>账号登陆</span>
                    <span class="phone">
                        手机动态码登陆
                        <i class="el-icon-mobile-phone phonelogo"></i> 
                    </span>  
                </p>
                <el-input v-model="userName" placeholder="手机号/用户名/邮箱" prefix-icon="profile"></el-input>
                <el-input v-model="password" placeholder="密码" prefix-icon="password" show-password></el-input>
                <div class="foot">
                    <a href="#">忘记密码</a>
                </div>        
                <el-button type="primary" :plain="true" class="btn-login" @click="submit">登录</el-button>
                <p class="reg">
                    <span>还没有账号？</span>
                    <router-link to="/regist">免费注册</router-link>
                </p>
                <div class="oauth-wrapper">
                    <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
                    <div class="oauth cf">
                        <a class="oauth__link oauth__link--qq" href="/account/connect/tencent" data-mtevent="{&quot;la&quot;:&quot;oauth/qq&quot;}" target="_blank"></a>
                        <a class="oauth__link oauth__link--weibo" href="/account/connect/sina" data-mtevent="{&quot;la&quot;:&quot;oauth/sina&quot;}" target="_blank"></a>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <ul>
                <li><a href="#">关于美团</a></li>
                <li><a href="#">加入我们</a></li>
                <li><a href="#">商家入驻</a></li>
                <li><a href="#">帮助中心</a></li>
                <li><a href="#">美团手机版</a></li>
            </ul>
            <p>©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
        </footer>
    </div>
</template>

<script>
import getData from "@/components/api/index.js"
export default {
    data(){
        return {
            password:'',
            userName:'',
            error:'',
        }
    },
    methods:{
        submit(){
            console.log(this.userName,this.password)
            if(!this.userName){
                this.error="请输入账号"
                return false;
            }
            if(!this.password){
                this.error="请输入密码"
                return false;
            }
            getData.getLogin({
                params:{
                    userName:this.userName,
                    password:this.password
                }
            }).then(res => {
                if(res.data.status === "fail"){
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                })}else{
                    this.$message('登录成功')
                    this.$store.dispatch('setUserName',this.userName)
                    this.$router.push('index')

                }
            })
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/login/index.scss";
</style>