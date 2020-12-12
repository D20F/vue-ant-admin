import Vue from 'vue'


Vue.directive('dir', {
    // e1:dom元素   binding:绑定对象
    bind: function (el, binding, vnode) {
        const {value} = binding;
        // console.log(value)
        //不填普通权限
        if(value === undefined){
            console.log('隐藏')
        }else if(value === 'xxx角色'){
            console.log('隐藏')
        }


        // 阻止点击事件
        // el.style.pointerEvents = 'none';
        // 隐藏按钮
        // el.style.display = 'none';
          
    },
    // unbind: function (el, binding, vnode) {
    //   console.log('unbind',binding)
    // },
    // inserted: function (el, binding, vnode) {
    //   console.log('inserted',binding)
    // },
    // update: function (el, binding, vnode) {
    //   console.log('update',binding)
    // },
    // componentUpdated: function (el, binding, vnode) {
    //   console.log('componentUpdated',binding)
    // },
  })





