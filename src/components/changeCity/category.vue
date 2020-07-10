<template>
    <div>
        <dl class="m-categroy">
            <dt>按拼音首字母选择:</dt>
            <dd v-for="(item,index) in list" :key="index">
               <a :href="'#city-'+item">{{ item }}</a>    
            </dd>
        </dl>
        <dl class="m-categroy-section " v-for="(item,index) in cityGroup"
        :key="index"
        :id="'city-'+index">
            <dt>{{ index }}</dt>
            <dd>
                <span v-for="city in item" 
                :key="city.id"
                @click="changeCity(city)">{{ city.name }}</span>
            </dd>
        </dl> 
    </div>
</template>

<script>
import getData from "@/components/api/index.js"
export default {
    data(){
        return {
            list:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
            cityGroup:{},
            }
    },
    created(){
        getData.getCityList().then(res => {
            console.log('网络请求了')
            var obj = {}
            res.data.data.forEach((item,index) => {
                if(!obj[item.firstChar.toUpperCase()]){
                    obj[item.firstChar.toUpperCase()]=[]
                }
                obj[item.firstChar.toUpperCase()].push(item)
            })
            for(let i of this.list){
                if(obj[i]){
                    // 这里要使用响应式的方法
                    this.$set(this.cityGroup,i,obj[i])
                }
            }
        })
    },
    methods:{
        changeCity(val){
            this.$router.push('index')
        }
    },
    mounted(){
        console.log(this.cityGroup)
    }
}
</script>

<style lang='scss'>
@import "@/assets/css/changecity/categroy.scss";
</style>