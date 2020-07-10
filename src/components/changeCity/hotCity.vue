<template>
  <div class="m-hcity">
    <dl>
      <dt>{{ title }}</dt>
      <dd v-for='item in list' :key="item.id"><a href="#">{{ item.name }}</a></dd>
    </dl>
  </div>
</template>

<script>
export default {
    props:['title','list'],
}
</script>

<style lang="scss">
    @import "@/assets/css/changecity/hot.scss";
</style>