<template>
    <div :class="['choose-wrap',disabled?'disabled':'']"  @click="handleClick" v-document-click="documentClick">
        <div :class="['choose',disabled?'disabled':'']">
            <span>{{ value }}</span>
            <i class="el-icon-caret-bottom"></i>
            <div :class="{'mt-content':true,'active':isshow}">
                <h2>{{ title }}</h2>
                <div :class="['wrapper',classname]" v-if="classname === 'province'">
                    <div class="col" v-for="(listData,index) in renderList" :key="index">
                        <span class="mt-item" 
                        v-for="(item,index) in listData"
                        :key="index" @click="changeValue([classname,
                        item.provinceName,item.cityInfoList])">
                        {{ item.provinceName }}
                        </span>
                    </div>
                </div>

                <div :class="['wrapper',classname]" v-if="classname === 'city'">
                    <div class="col" v-for="(listData,index) in renderList" :key="index">
                        <span class="mt-item" 
                        v-for="(item,index) in listData"
                        :key="index" @click="changeValue([classname,item])">
                        {{ item.name }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['title','list','isshow','value','classname','disabled'],
    computed:{
        renderList(){
            let num = this.list.length
            let col = Math.ceil(num/12);
            let resultList = [];
            for(var i = 0;i < col;i++){
                let data = this.list.slice(i*12,i*12+12)
                resultList.push(data)
            }
            return resultList;

        }
    },
    methods:{
        handleClick(e){
            e.stopPropagation(); // 阻止冒泡
            this.$emit("changeActive",!this.isshow)
        },
        documentClick(){
            this.$emit("changeActive",false)
        },
        // 更改值
        changeValue(val){
            this.$emit('changeValue',val)
        }
    }

}
</script>

<style lang="scss">
    @import "@/assets/css/changeCity/select.scss"
</style>