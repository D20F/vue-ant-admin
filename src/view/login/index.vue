<template>
    <div class="container_box">
        <p>login</p>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {};
    },
    components: {},
    mixins: [],
    created() {
        this.$store.state.public.socket.onclose = function (e) {
            console.log("服务器关闭", e);
        };
        this.$store.state.public.socket.onmessage = function (e) {
            console.log("服务器接受", e.data);
        };
        this.$store.state.public.socket.onerror = function () {
            console.log("连接出错");
        };
    },
    methods: {},
    computed: {},
};
</script>

<style scoped lang="scss">
</style>
