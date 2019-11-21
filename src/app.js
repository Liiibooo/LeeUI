import Vue from 'vue'
import Button from './button'
import icon from './l-icon.vue'
Vue.component('l-icon', icon)
Vue.component('g-button', Button)
new Vue({
    el: "#app"
})