<template>
    <div>
        <Tinymce ref="editor" v-model="postForm.content" :height="400" />
    </div>
</template>
<script>
import Tinymce from "@/components/Tinymce";

export default {
    name: "textFormat",
    components: { Tinymce },
    data() {
        return {
            postForm: {
                content: "",
            },
        };
    },
    methods: {

    },
};
</script>

<style scoped>
</style>
