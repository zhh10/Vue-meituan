import axios from "axios" 
axios.defaults.baseURL = "http://open.duyiedu.com" 
// 增加拦截器
axios.interceptors.request.use(function(config){
    config.params = {
        ...config.params,
        appkey:'13668918723_1581854136361'
    }
    return config 
},function(error){
    return Promise.reject(error)
})

export default axios 
