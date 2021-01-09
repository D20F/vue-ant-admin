/**
 * bind             绑定
 * unbind           解绑
 * inserted         插入
 * update           更新
 * componentupdated 子节点更新
 */

// el.insertAdjacentHTML(
//     'beforeend',
//     `<div> <div />`
// )
// 'beforebegin'：元素自身的前面。
// 'afterbegin'：插入元素内部的第一个子节点之前。
// 'beforeend'：插入元素内部的最后一个子节点之后。
// 'afterend'：元素自身的后面。

Vue.directive('dir', {
  // e1:dom元素   binding:绑定对象 vnode:虚拟dom节点
  bind: function(el, binding, vnode) {
    console.log('bind', binding)
    console.log('自定义指令绑定数据', binding.expression)
    console.log('input v-model 绑定值 val', vnode.context.val)
    console.log('获取绑定click函数', vnode.data.on.click.fns())

    // 阻止点击事件
    el.style.pointerEvents = 'none'
  },
  unbind: function(el, binding, vnode) {
    console.log('unbind', binding)
  },
  inserted: function(el, binding, vnode) {
    console.log('inserted', binding)
  },
  update: function(el, binding, vnode) {
    console.log('update', binding)
  },
  componentUpdated: function(el, binding, vnode) {
    console.log('componentUpdated', binding)
  }
})

import Vue from 'vue'
import './copy'
import './regular'
import './debounce'
import './hover-tip'

