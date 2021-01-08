<template>
  <div>
    <el-upload
      class="upload-demo"
      drag
      multiple
      action="http://127.0.0.1:7001/upload"
      :data="params"
      list-type="picture"
      :auto-upload="true"
      :on-success="success"
      :on-error="error"
    >
      <i class="el-icon-upload" />
      <div class="el-upload__text">
        将文件拖到此处，或<em>点击上传</em>
      </div>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>

    <DragAndDrop
      :before-upload="beforeUpload"
    />
  </div>
</template>
<script>
/*  el-upload
    文件显示 list-type:   text/picture/picture-card
    文件多选 multiple:    true/false
    自动上传 auto-upload: true/false
    文件拖拽 drag
    文件接口 action
*/

import DragAndDrop from '@/components/DragAndDrop'

export default {
  name: 'Upload',
  components: { DragAndDrop },
  data() {
    return {
      params: {} // 上传携带参数
    }
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1

      if (isLt1M) {
        return true
      }

      this.$message({
        message: '文档大小过大',
        type: 'warning'
      })
      return false
    },
    success(val) {
      console.log(val)
    },
    error(err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
.upload-demo {
    width: 360px;
    height: 180px;
    position: relative;
}
/* .el-upload__text {
    position: absolute;
    top: 25%;
    left: 25%;
}
.el-upload__tip {
    position: relative;
    text-align: center;
} */
</style>
