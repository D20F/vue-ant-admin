<template>
    <div class="hello">
        <p>{{msg}}</p>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: {
            type: String,
            default: "1",
        },
    },
};
</script>

<style scoped>
</style>
