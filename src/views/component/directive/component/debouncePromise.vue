<template>
    <div>
        <p>只有当promise完成才可以继续点击增加</p>
        <p class="code_btn" v-debounce-promise="click_pro">增加</p>
        <p>数量 {{ count }} 个</p>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        click_pro() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    this.count++;
                    resolve(true);
                }, 3000);
            });
        },
    },
};
</script>
<style lang="scss" scoped>
</style>