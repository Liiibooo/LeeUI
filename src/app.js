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
        isLoading3: false
    }
})
import chai from 'chai'
const expect = chai.expect
//单元测试
{
    const Constructor = Vue.extend(Button) //创造一个子类
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    }) //生成一个button实例
    button.$mount('#test')
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')
}
{
    const Constructor = Vue.extend(Button) //创造一个子类
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button) //创造一个子类
    const button = new Constructor({
        propsData: {
            icon: 'love',
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('1')
}