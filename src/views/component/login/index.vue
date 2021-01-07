<template>
    <div class="dashboard">

        <!-- <input type="text" placeholder="" v-regular="['val',/^1([3|4|5|7|8|])\d{9}$/]" v-model="val" /> -->
        <input type="text" placeholder="" v-regular="['val',/a/]" v-model="val" />
      
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
