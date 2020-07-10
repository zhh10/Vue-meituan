<template>
  <div>
      <span class="name">按省份选择</span>
      <m-select title="省份" 
      :value="province" 
      :list="provinceList" 
      :isshow="isProvince" 
      classname="province"
      @changeActive="changeProvinceActive($event)"
      @changeValue="changeValue($event)"
      />
      <m-select title="城市" 
      :value="city" 
      :list="cityList"
      :isshow="isCity"
      classname="city"
      @changeActive="changeCityActive($event)"
      @changeValue="changeValue($event)"
      :disabled="cityDisabled"/>
      <span class='name'>直接搜索</span>
      <el-select
        v-model="searchWord"
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
        @change='Change'
        >
        <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
      </el-select>
  </div>
</template>

<script>
import mSelect from "@/components/changeCity/mSelect.vue"
import getData from "@/components/api/index.js"
// import { NONAME } from 'dns'
export default {
    components:{
        mSelect
    },
    data(){
        return {
            province:'省份',
            city:'城市',
            provinceList:[],
            cityList:[],
            isProvince:false,
            isCity:false,
            searchWord:'',
            loading:false,
            searchList:[],
        }
    },
    computed:{
        cityDisabled(){
            console.log(this.province === '省份' ? true : '')
            return this.province === '省份' ? true : ''
        }
    },
    created(){
        getData.getProvinceList().then(res => {
            this.provinceList = res.data.data
        })
    },
    methods:{
        changeProvinceActive(val){
            this.isProvince = val
        },
        changeCityActive(val){
            this.isCity = val
        },
        changeValue(val){
            console.log(val[0])
            if(val[0] === "province"){
                this.province = val[1]
                this.cityList = val[2]
            }else{
                this.city = val[1].name
                // 跳转页面
                console.log(val[1])
                this.$router.push('index')
                this.$store.dispatch('setPosition',val[1])

            }
        },
        remoteMethod(query){
            // 请求后端接口
            getData.getCityList().then(res => {
                // this.searchList = res.data.data.map(item => {
                //     item.name.includes(query)
                // })
                let data = res.data.data.filter(item => {return item.name.includes(query) || item.firstChar.includes(query) || item.pinyin.includes(query)})
                this.searchList = data.map(item => {
                    return item.name
                })
            })
        },
        Change(val){
            this.searchWord = val
            this.$router.push('index')
        }

    }

}
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>