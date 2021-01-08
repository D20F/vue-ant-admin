import Vue from 'vue'
import { showTip_div } from '@/utils/directive/show'

/**
 * phone 手机号检测
 * parmes[bindVal]
 * bindVal input双向绑定值的key
 */
Vue.directive('regular-phone', {
  bind: function(el, binding, vnode) {
    let bindVal
    if (binding.value) {
      bindVal = binding.value[0]
    }
    const phone = /^1([3|4|5|7|8|])\d{9}$/
    const body = document.getElementsByTagName('body')[0]

    el.handler = () => {
      if (!phone.test(vnode.context[bindVal])) {
        showTip_div(body, '手机号格式错误', 'center', 1500)
      }
    }
    el.addEventListener('change', el.handler)
  },
  unbind: function(el, binding, vnode) {
    el.removeEventListener('change', el.handler)
  },
  inserted: function(el, binding, vnode) { },
  update: function(el, binding, vnode) { },
  componentUpdated: function(el, binding, vnode) { }
})

/**
 * 正则检测
 * parmes [bindVal,regular]
 * bindVal input双向绑定值的key
 * regular 正则
 */
Vue.directive('regular', {
  bind: function(el, binding, vnode) {
    let bindVal
    let regular
    if (binding.value) {
      bindVal = binding.value[0]
      regular = binding.value[1]
    }
    const body = document.getElementsByTagName('body')[0]

    el.handler = () => {
      if (regular.test(vnode.context[bindVal])) {
        showTip_div(body, '请按照规则填写', 'center', 1500)
        vnode.context[bindVal] = vnode.context[bindVal].replace(regular, '')
      }
    }
    el.addEventListener('change', el.handler)
  },
  unbind: function(el, binding, vnode) {
    el.removeEventListener('change', el.handler)
  },
  inserted: function(el, binding, vnode) { },
  update: function(el, binding, vnode) { },
  componentUpdated: function(el, binding, vnode) { }
})

/**
 * 检测最少数值为8位
 * parmes 需要绑定 input双向绑定值的key
 */
Vue.directive('regular-min', {
  bind: function(el, binding, vnode) {
    let bindVal
    if (binding.expression) {
      bindVal = binding.expression
    }
    const phone = /^1([3|4|5|7|8|])\d{9}$/
    const body = document.getElementsByTagName('body')[0]

    el.handler = () => {
      console.log(vnode.context[bindVal])
      if (vnode.context[bindVal].split('').length < 8) {
        showTip_div(body, '密码最少不少于8位', 'center', 1500)
      }
    }
    el.addEventListener('change', el.handler)
  },
  unbind: function(el, binding, vnode) {
    el.removeEventListener('change', el.handler)
  },
  inserted: function(el, binding, vnode) { },
  update: function(el, binding, vnode) { },
  componentUpdated: function(el, binding, vnode) { }
})

