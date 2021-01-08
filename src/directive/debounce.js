import Vue from 'vue'

// promise 防抖 指令必须绑定一个promise对象
Vue.directive('debounce-promise', {
  bind: function(el, binding, vnode) {
    el.handler = () => {
      if (!run) {
        return
      }
      run = false
      binding.value().then((val) => {
        run = true
      }).catch((err) => {
        console.log(err)
        run = true
      })
    }
    let run = true
    el.addEventListener('click', el.handler)
  },
  unbind: function(el, binding, vnode) {
    el.removeEventListener('click', el.handler)
  },
  inserted: function(el, binding, vnode) { },
  update: function(el, binding, vnode) { },
  componentUpdated: function(el, binding, vnode) { }
})

// 时间防抖   默认 2秒
Vue.directive('debounce-timing', {
  bind: function(el, binding, vnode) {
    let time
    let run = true

    if (binding.expression) {
      time = binding.expression
    } else {
      time = 2000
    }

    el.handler = () => {
      if (!run) {
        return
      }
      run = false

      // 阻止点击事件
      el.style.pointerEvents = 'none'
      setTimeout(() => {
        el.style.pointerEvents = 'auto'
        run = true
      }, time)
    }
    el.addEventListener('click', el.handler)
  },
  unbind: function(el, binding, vnode) {
    el.removeEventListener('click', el.handler)
  },
  inserted: function(el, binding, vnode) { },
  update: function(el, binding, vnode) { },
  componentUpdated: function(el, binding, vnode) { }
})

