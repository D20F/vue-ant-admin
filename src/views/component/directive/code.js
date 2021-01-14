const compiler = require("vue-template-compiler");



export default {
    copySelect: {
        js: `Vue.directive('copy-select', {
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
        style: `.dashboard {
                    &-container {
                        margin: 30px;
                    }
                    &-text {
                        font-size: 30px;
                        line-height: 46px;
                    }
                }`,
        name: "copySelect",
        title: "选中复制",
        select: "",
        render: compiler.compileToFunctions("<p v-copy-select>选中复制</p>").render,
    },
    copyClick: {
        js: `
            Vue.directive('copy-click', {
                bind: function(el, binding, vnode) {            
                    el.handler = () => {
                        const input = document.createElement('input');
                        input.setAttribute('readonly', 'readonly');
                        input.setAttribute('value', binding.expression);
                        document.body.appendChild(input);
                        input.select();
                        const execCommand = document.execCommand('copy');
                        document.body.removeChild(input);
                        if (execCommand) {
                            showTip_div(el, '复制成功', 'center', 1500)
                        }
                    }
                    el.addEventListener('click', el.handler)
                },
                unbind: function(el, binding, vnode) {
                    el.removeEventListener('click', el.handler)
                },
            })
            `,
        style: "",
        name: "copyClick",
        title: "点击复制",
        select: "",
        render: compiler.compileToFunctions(`<p v-copy-click="'点击复制'">点击复制</p>`).render,
    }
}

