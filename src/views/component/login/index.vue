<template>
    <div class="dashboard">
        
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Dashboard",
    computed: {
        ...mapGetters(["name"]),
    },
    methods: {},
    created() {},
};
</script>

<style lang="scss" scoped>
$subMenuHover: #1890ff;
.dashboard {
    width: 100%;

}
</style>
