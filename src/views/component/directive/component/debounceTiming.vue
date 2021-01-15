<template>
    <div>
        <p>时间结束可继续点击,默认2秒</p>
        <p class="code_btn" v-debounce-timing v-on:click="count++">增加</p>
        <p>数量 {{ count }} 个</p>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return { count: 0 };
    },
    methods: {
    },
};
</script>
<style lang="scss" scoped>
</style>