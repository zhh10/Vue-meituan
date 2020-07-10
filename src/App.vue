<template>
  <div id="app">
    <router-view />
    <!-- <abc /> -->
  </div>
</template>

<script>
import abc from '@/layout/default.vue'
export default {
  name: 'App',
  components:{
    abc
  }
}
</script>

