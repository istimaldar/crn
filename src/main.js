import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

//全局引入
import VueCron from './index.js'
Vue.use(VueCron);//使用方式：<vueCron></vueCron>

//局部引入
import {cron} from './index.js'

export default {
    template: '<cron/>',
    components: { cron }
}

