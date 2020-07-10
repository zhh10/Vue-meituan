<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt class="active">全部</dt>
      <dd v-for="(item) in classicList" :key="item.type">
        <m-select :name="item.title" :list="item.sub_list" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt class="active">全部</dt>
      <dd v-for="(item) in areaList" 
      :key="item.type"
      >
        <m-select :name="item.title" :list="item.sub_list"></m-select>
      </dd>
    </dl>
    <dl class="classic">
      <dt>用餐人数</dt>
      <dt :class="{'active': isshow === 'all'}" @click="handleClick('all')">全部</dt>
      <dd v-for="item in eatPeople"
      :key="item.type" @click="handleClick(item.title)"
      :class="{'active': isshow === item.title}"
      >{{ item.title }}
      </dd>
    </dl>
  </div>
</template>

<script>
import MSelect from "@/components/products/select.vue"
export default {
  components:{
    MSelect
    },
  methods:{
    handleClick(val){
      this.isshow = val
    }
  },
  data() {
    return {
      isshow:'all',
      classicList: [
        {
          title: "美食",
          type: "food",
          sub_list: [
            {
              name: "日本菜",
              id: "Japan"
            },
            {
              name: "饮品店",
              id: "drink"
            },
            {
              name: "面包甜点",
              id: "cate"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          sub_list: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "经济型酒店",
              id: "economy"
            },
            {
              name: "高端酒店",
              id: "high"
            }
          ]
        }
      ],
      areaList: [
        {
          title: "推荐商圈",
          sub_list: [
            {
              name: "望京",

              id: 120000
            },

            {
              name: "昌平",

              id: 12222
            }
          ]
        }
      ],
      eatPeople:[{
        title:'单人餐',
        type:'single'
      },{
        title:'双人餐',
        type:'two',
      },{
        title:'3-4人',
        type:"three",
      },{
        title:'5-6人',
        type:'five',
      },{
        title:'7-8人',
        type:'seven',
      },{
        title:'9-10人',
        type:'nine',
      }
      ]
    };
  },

}
</script>
<style>

</style>