import Vue from 'vue'
import { showTip_div } from '@/utils/directive/show'
// 选中复制
Vue.directive('copy-select', {
    bind: function (el, binding, vnode) {
        el.handler = () => {
            let execCommand = document.execCommand('copy');
            if (execCommand) {
                showTip_div(el, '复制成功', 'bottom', 1000)
            }
        }

        el.addEventListener('mouseup', el.handler)
    },
    unbind: function (el, binding, vnode) {
        el.removeEventListener('mouseup', el.handler)
    },
    inserted: function (el, binding, vnode) {},
    update: function (el, binding, vnode) {},
    componentUpdated: function (el, binding, vnode) {},
})

// 点击传值复制
Vue.directive('copy-click', {
    bind: function (el, binding, vnode) {

        // console.log('自定义指令绑定数据',binding.expression)

        el.handler = () => {
            let input = document.createElement('input');
            input.setAttribute('readonly', 'readonly'); // 防止手机上弹出软键盘
            input.setAttribute('value', binding.expression);
            document.body.appendChild(input);
            input.select();
            let execCommand = document.execCommand('copy');
            document.body.removeChild(input);

            if (execCommand) {
                showTip_div(el, '复制成功', 'center', 1500)

            }
        }

        el.addEventListener('click', el.handler)
    },
    unbind: function (el, binding, vnode) {
        el.removeEventListener('click', el.handler)
    },
    inserted: function (el, binding, vnode) {},
    update: function (el, binding, vnode) {},
    componentUpdated: function (el, binding, vnode) {},
})

