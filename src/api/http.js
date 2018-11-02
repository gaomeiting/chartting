import axios from 'axios'
/* import store from '../store' */

import { Toast } from 'antd-mobile';
// axios 配置
axios.defaults.timeout = 5000;
/*axios.defaults.baseURL = 'https://api.github.com';*/

// http request 拦截器



function startLoading() {
   Toast.loading('加载中···', 0);
}

function endLoading() {
    Toast.hide();
}


let needLoadingRequestCount = 0

export function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        endLoading()
    }
}

axios.interceptors.request.use(
    config => {
        //console.log(config.showLoading)
        if (config.showLoading) {
            showFullScreenLoading()
        }
        /* if (store.state.token) {
            config.headers.Authorization = `${store.state.token}`;
        } */
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(

    response => {
        if (response.config.showLoading) {
            tryHideFullScreenLoading()
        }

        return response;
    },
    error => {
        tryHideFullScreenLoading()
        /* if (error.response) {
            switch (error.response.status) {
                case 302:
                    store.commit('SET_LOGOUT');
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        } */
        return Promise.reject(error.response.data)
    });

export default axios;