<template>
    <div class="outer-layer-percentage">
        <CodeShow>
            <template v-slot:title>
                <p  >自定义指令</p>
            </template>
            <template v-slot:content>
                <div>
                    <p v-copy-select>选中复制</p>
                </div>
            </template>
            <template v-slot:select>
                <p>指令</p>
            </template>
            <template v-slot:code>
                <div>
                    <pre>
                        <code class="language-javascript " >
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
                            })
                        </code>
                    </pre>
                </div>
            </template>
        </CodeShow>
    </div>
</template>

<script>
import prism from "@/mixins/prism";

export default {
    name: "Directive",
    components: {},
    mixins: [prism],
    data() {
        return {
            text: "",
        };
    },
    computed: {},
    created() {},
    methods: {
        add() {},
    },
};
</script>

<style lang="scss" scoped>
.dashboard {
    &-container {
        margin: 30px;
    }
    &-text {
        font-size: 30px;
        line-height: 46px;
    }
}
</style>
