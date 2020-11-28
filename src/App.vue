<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
    components: {},
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
