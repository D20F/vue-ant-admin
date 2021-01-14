<template>
    <div class="box">
        <div class="topbar">
            <div class="left">
                <slot name="title" />
                <p>{{ list.title }}</p>
            </div>
            <div class="right">
                <p>选项</p>
                <div style="display: flex">
                    <div @click="copy" v-hover-tip="['复制代码']">
                        <v-icon> mdi-content-copy </v-icon>
                    </div>
                    <div @click="unfold" v-hover-tip="['查看源代码']">
                        <v-icon> mdi-arrow-top-right-bottom-left </v-icon>
                    </div>
                </div>
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
        <div
            class="tabbar"
            :class="code_class"
            :style="{ height: tabbar_height + 'px' }"
        >
            <!-- <slot name="code" /> -->
            <div>
                <pre>
                <code class="language-javascript " >
                    {{list.js}}
                </code>
            </pre>
                <pre v-if="list.style">
                <code class="language-css " >
                    {{list.style}}
                </code>
            </pre>
            </div>
        </div>
    </div>
</template>




<script>
import { random, select, selectCopy } from "@/utils/tool/index";
export default {
    name: "CodeShow",
    props: {
        list: {
            type: Object,
            default: () => {
                return {
                    render: "",
                    select: "",
                    name: "",
                    js: "",
                    style: "",
                    title: "",
                };
            },
        },
    },
    data() {
        return {
            tabbar_height: "30",
            max_height: "",
            code_class: "",
        };
    },
    computed: {},
    mounted() {
        this.code_class = random(8);
        this.$nextTick(() => {
            this.max_height = document.querySelector(
                "." + this.code_class
            ).firstElementChild.clientHeight;
        });
    },
    created() {},
    methods: {
        copy() {
            let dom = document.querySelector('.' + this.code_class)
            selectCopy(dom)
        },
        unfold() {
            if (this.tabbar_height == "30") {
                this.tabbar_height = this.max_height + 48;
            } else {
                this.tabbar_height = "30";
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.box {
    width: 80%;
    min-height: 190px;
    margin: 0 auto 20px auto;
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
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        width: 30%;
        height: 100%;
        p {
            justify-content: left;
        }
        div {
            justify-content: right;
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
    overflow: hidden;
    border-radius: 0 0 4px 4px;
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;

    transition: all 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}
</style>
