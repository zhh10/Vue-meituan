<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
            <hotCity title='热门城市' :list="hotCityList"/>
        </el-row>
        <el-row>
            <hotCity title="最近访问" :list="renctCityList"/>
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>
</template>

<script>
import getData from "@/components/api/index.js"
import province from "@/components/changeCity/province.vue"
import hotCity from "@/components/changeCity/hotCity.vue"
import category from "@/components/changeCity/category.vue"
export default {
    data(){
        return {
            hotCityList : [],
            renctCityList : []
        }
    },
    components:{
        province,
        hotCity,
        category,
    },
    created(){
        getData.getHotCity().then(res => {
            this.hotCityList = res.data.data
        })

        getData.getRenctCity().then(res => {
            this.renctCityList = res.data.data
        })
    }

}
</script>

<style lang='scss'>
@import "@/assets/css/changeCity/iselect.scss";
</style>