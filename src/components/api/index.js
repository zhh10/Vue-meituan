import axios from "@/axios.js" 

var getData = {
    getHotPlace(){
        return axios.get('/api/meituan/header/searchHotWords.json')
    },
    getSearchData(){
        return axios.get('/api/meituan/header/search.json')
    },
    getMenuData(){
        return axios.get('/api/meituan/index/nav.json')
    },
    getContent(){
        return axios.get('/api/meituan/index/resultsByKeywords.json')
    },
    getHotCity(){
        return axios.get('/api/meituan/city/hot.json')
    },
    getRenctCity(){
        return axios.get('/api/meituan/city/recents.json')
    },
    getProvinceList(){
        return axios.get('/api/meituan/city/province.json')
    },
    getCityList(){
        return axios.get('/api/meituan/city/cityList.json')
    },
    getPosition(){
        return axios.get('/api/meituan/city/getPosition.json')
    },
    getGoodsList(){
        return axios.get('/api/meituan/list/goodsList.json')
    },
    getRecommend(){
        return axios.get('/api/meituan/list/recommend.json')
    },
    getLogin(params){
        return axios.get('/api/meituan/login',params)
    },
    getRegist(params){
        return axios.get('/api/meituan/register', params)
    }
}

export default getData