<template>
  <div class="s-item">
    <dt>
      <img :src="meta.image" :alt="meta.title" />
    </dt>
    <dd>
      <h3>
        <router-link to="{name:'productDetail'}">{{ meta.title }}</router-link>
      </h3>
      <p>
      <el-rate v-model="meta.score" disabled show-score text-color="#ff9900" score-template="{ value }"></el-rate>
      <span class="s-item-comment-total">{{ meta.commentNum }}条评价</span>
      </p>
      <p>
          <span>
              <a href="#">
                  <i class="el-icon-location"></i>
              </a>
              <span class="s-item-addr">{{ meta.address }}</span>
          </span>
      </p>
      <p>
          <span class="s-item-price">
              人均￥{{ meta.avgPrice }}
          </span>
      </p>
      <p>
          <span>现价:{{ meta.dealItems[0].price }}</span>
          <span>门店价:<del>{{ meta.dealItems[0].counterPrice }}</del></span>
      </p>
      <p>
          <span class="description">{{ meta.dealItems[0].title }}</span>
      </p>
    </dd>
  </div>
</template>

<script>
export default {
    props:['meta']
};
</script>

<style>
</style>