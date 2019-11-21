import Vue from 'vue'
import Button from './button'
import Icon from './l-icon.vue'
Vue.component('l-icon', Icon)
Vue.component('g-button', Button)
new Vue({
    el: "#app",
    data: {
        isLoading1: false,
        isLoading2: false,
        isLoading3:false
    }
})