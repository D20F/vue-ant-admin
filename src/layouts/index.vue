<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
            <sider />
        </a-layout-sider>
        <a-layout>
            <a-layout-content>
                <headers />
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Home</a-breadcrumb-item>
                    <a-breadcrumb-item>List</a-breadcrumb-item>
                    <a-breadcrumb-item>App</a-breadcrumb-item>
                </a-breadcrumb>
                <div class="box">
                    <router-view />
                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
import content from "./content";
import sider from "./sider";
import headers from "./header";
export default {
    data() {
        return {
            collapsed: false,
        };
    },
    components: {
        content,
        sider,
        headers,
    },
};
</script>
<style>
#components-layout-demo-custom-trigger {
    width: 100%;
    height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}
.box {
    width: 100%;
    height: calc(100% - 93px);
}
</style>
