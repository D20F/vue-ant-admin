<template>
    <div class="outer-layer-percentage">
        <CodeShow v-for="(item, index) of doc" :key="index">
            <template v-slot:title>
                <p>{{ item.title }}</p>
            </template>
            <template v-slot:content>
                <div>
                    <component :is="item.name"></component>
                </div>
            </template>
            <template v-slot:select>
                {{ item.select }}
            </template>
            <template v-slot:code>
                <pre>
                    <code class="language-javascript " >
                        {{item.code}}
                    </code>
                </pre>
            </template>
        </CodeShow>
    </div>
</template>

<script>
import prism from "@/mixins/prism";

import code from "./code";

export default {
    name: "Directive",
    components: code,
    mixins: [prism],
    data() {
        return {
            doc: code,
        };
    },
    computed: {},
    created() {},
    methods: {},
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
