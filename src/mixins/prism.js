// 调用 prism 美化代码
export default {
    created() {
        this.$nextTick(()=>{
            let Prism = require('@/utils/prism/prism')
            Prism.highlightAll()
        })
    },
}



