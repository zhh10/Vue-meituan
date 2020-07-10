<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <Crumbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <Categroy />
                </el-row>
                <el-row>
                    <List />
                </el-row>
            </el-col>
            <el-col :span="5">
                <like />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Crumbs from "@/components/products/crumbs.vue" ;
import Categroy from '@/components/products/categroy.vue';
import List from "@/components/products/list.vue";
import Like from "@/components/products/like.vue"
export default {
    components:{
        Crumbs,
        Categroy,
        List,
        Like
    },
}
</script>

<style lang="scss">
 @import '@/assets/css/products/index.scss';
</style>