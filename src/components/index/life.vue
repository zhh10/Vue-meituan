<template>
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li>
          <router-link to="/goods" class="takeout">美团外卖</router-link>
        </li>
        <li>
          <router-link to="/">猫眼电影</router-link>
        </li>
        <li>
          <router-link to="/">美团酒店</router-link>
        </li>
        <li>
          <router-link to="/" class="apartment">民宿/公寓</router-link>
        </li>
        <li>
          <router-link to="/" class="business">商家入驻</router-link>
        </li>
        <li>
          <router-link to="/">美团公益</router-link>
        </li>
      </ul>
    </el-row>
    <el-row>
      <el-col :span="14">
        <slider />
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6" v-show="! $store.state.userName">
        <div class="m-life-login">
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt />
          </h4>

          <p class="m-life-login-name">Hi!请登录</p>
          <router-link to="/regist">
            <el-button round>注册</el-button>
          </router-link>
          <router-link to="/login">
            <el-button round>立即登录</el-button>
          </router-link>
        </div>
      </el-col>
      <el-col :span="6" v-show="$store.state.userName">
        <div class="m-life-login">
          <h4>
            <img
              src="https://b-ssl.duitang.com/uploads/item/201511/21/20151121171107_zMZcy.jpeg"
              alt
            />
          </h4>
          <p class="m-life-login-name">欢迎你！{{ $store.state.userName }}</p>
          <div class="fn-row">
            <div class="fn-item">
              <a href>
                <div class="icon">
                  <i class="el-icon-s-order"></i>
                </div>
                <p>我的订单</p>
              </a>
            </div>
            <div class="fn-item">
              <a href>
                <div class="ico">
                  <i class="el-icon-star-on"></i>
                </div>
                <p>我的收藏</p>
              </a>
            </div>
            <div class="fn-item">
              <a href>
                <div class="ico">
                  <i class="el-icon-s-ticket"></i>
                </div>
                <p>抵用券</p>
              </a>
            </div>
          </div>
          <div class="fn-row">
            <div class="fn-item">
              <a href>
                <div class="ico">
                  <i class="el-icon-bank-card"></i>
                  <p>余额</p>
                </div>
              </a>
            </div>
            <div class="fn-item">
              <a href>
                <div class="ico">
                  <i class="el-icon-share"></i>
                  <p>更多</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <a href>
          <div class="m-life-hotel"></div>
        </a>
      </el-col>
      <el-col :span="7">
        <a href>
          <div class="m-life-music"></div>
        </a>
      </el-col>
      <el-col :span="4">
        <a href>
          <div class="m-life-coop"></div>
        </a>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP" />
          <p>美团手机APP</p>
          <p class="last-p">
            <span class="red">1元起</span>
            <span>吃喝玩乐</span>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import slider from "@/components/index/slider.vue";
export default {
  components: {
    slider
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/life.scss";
</style>