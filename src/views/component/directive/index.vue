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
                <p></p>
            </template>
        </CodeShow>

    </div>
</template>

<script>
import CodeShow from "@/components/CodeShow";

export default {
    name: "directive",
    data() {
        return {
            text: 'v-copy-select',
        };
    },
    components: {
        CodeShow,
    },
    computed: {},
    methods: {
        add(){
            
        }
    },
    created() {},
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
