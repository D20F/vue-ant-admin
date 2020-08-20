<template>
    <a-config-provider :locale="locale">
        <div id="app">
            <router-view />
        </div>
    </a-config-provider>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import enUS from "ant-design-vue/lib/locale-provider/en_US";

export default {
    name: "App",
    data() {
        return {};
    },
    computed: {
        locale() {
            let locale = "";
            if (this.$store.state.system.language == "zhCN") {
                locale = zhCN;
            } else if (this.$store.state.system.language == "enUS") {
                locale = enUS;
            }
            return locale;
        },
    },
    created() {},
};
</script>

<style lang="scss">
@import "@/style/public.scss";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
}
html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>
