const compiler = require("vue-template-compiler");



export default {
    child: {
        code: `
                Vue.directive('copy-select', {
                    bind: function(el, binding, vnode) {
                        el.handler = () => {
                            const execCommand = document.execCommand('copy')
                            if (execCommand) {
                                showTip_div(el, '复制成功', 'bottom', 1000)
                            }
                        }
                        el.addEventListener('mouseup', el.handler)
                    },
                    unbind: function(el, binding, vnode) {
                        el.removeEventListener('mouseup', el.handler)
                    },
                })`,
        name: "child",
        title: "自定义指令",
        select: "",
        render: compiler.compileToFunctions("<p v-copy-select>选中复制</p>").render,
    }
}
