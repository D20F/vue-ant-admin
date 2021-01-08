<template>
    <div class="dashboard">

    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Dashboard",
    data() {
        return {
            val: '',
            show: true,
        };
    },
    computed: {
        ...mapGetters(["name"]),
    },
    methods: {
        fun() {
            console.log('fun')
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(1);
                }, 2000);
            });
        },
        ccc() {
            console.log('111111111')

        },
    },
    created() {},
};
</script>

<style lang="scss" scoped>

</style>
