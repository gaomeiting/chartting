
/* import router from "../router" */
import store from "../store"
import {
    message
} from 'ant-design-vue';

export function handlerError(err) {
    if (err) {
        if(err.status == 401) {
            store.commit('SET_LOGOUT');
            store.commit('SET_LOGIN', 0)
            /* router.replace({
                path: '/login',
                query: {redirect: router.currentRoute.fullPath}
            }) */
            return;
        }
        if(err.details) {
            message.warning(err.details[0].message);
            return;
        }
        if (err.message) {
            message.warning(err.message);
        } else {
            message.warning(err.error);
        }
    } else {
        message.warning('接口调试中');
    }
}

