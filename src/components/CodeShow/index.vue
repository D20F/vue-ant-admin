<template>
    <div class="box">
        <div class="topbar">
            <div class="left">
                <slot name="title" />
            </div>
            <div class="right">
                <p>选项</p>
                <v-icon> mdi-content-copy </v-icon>
            </div>
        </div>
        <div class="content">
            <div class="left">
                <slot name="content" />
            </div>
            <div class="right">
                <slot name="select" />
            </div>
        </div>
        <div class="tabbar">
            <slot name="code" />
        </div>
    </div>
</template>

<script>
export default {
    name: "CodeShow",
    props: {
        title: {
            type: String,
            default: "",
        },
    },
    computed: {},
    created() {},
    methods: {},
};
</script>

<style lang="scss" scoped>
.box {
    width: 80%;
    min-height: 300px;
    margin: 0 auto;
    position: relative;
    div {
        position: relative;
    }
}
.topbar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    border-top: 1px solid #e0e0e0;
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    border-radius: 4px 4px 0 0;
    .left {
        width: 70%;
        height: 100%;
        border-right: 1px solid #e0e0e0;
        display: flex;
        padding: 0 10px;
        justify-content: left;
        align-items: center;
        p {
        }
    }
    .right {
        display: flex;
        justify-content: left;
        padding: 0 10px;
        align-items: center;
        width: 30%;
        height: 100%;
        p {
        }
    }
}
.content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100px;
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    .left {
        width: 70%;
        min-height: 100px;
        background: #fafafa;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .right {
        padding: 10px 10px;

        width: 30%;
        height: 100%;
        min-height: 100px;
        border-left: 1px solid #e0e0e0;
    }
}
.tabbar {
    background: #fafafa;
    padding: 10px 10px;
    width: 100%;
    min-height: 50px;
    border-radius: 0 0 4px 4px;
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
}
</style>
