<template>
    <div class="outer-layer-percentage">
        <CodeShow>
            <template v-slot:title>
                <p>自定义指令</p>
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
                    <!-- {{text}} -->
                </div>
            </template>
        </CodeShow>

    <pre>
        <code class="language-javascript" >
            console.log(1111)
        </code>
    </pre>
    </div>
</template>

<script>
import CodeShow from "@/components/CodeShow";
import '@/utils/prism/prism'

export default {
    name: "Directive",
    components: {
        CodeShow,
    },
    data() {
        return {
            text: ''
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
