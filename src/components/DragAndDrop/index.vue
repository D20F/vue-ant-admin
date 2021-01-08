<template>
  <div>
    <input ref="excel-upload-input" class="excel-upload-input" type="file" :accept="fileType" @change="handleClick">
    <div class="drop" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">
      拖拽 文件或者
      <el-button :loading="loading" style="margin-left:16px;" size="mini" type="primary" @click="handleUpload">
        上传
      </el-button>
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx'
import axios from 'axios'

export default {
  props: {
    fileType: { // 文件类型 默认为空  逗号分割 .xlsx, .xls
      type: String,
      default: ''
    },
    autoUpload: { // 拖拽后自动上传 只对单个有效
      type: Boolean,
      default: true
    },
    beforeUpload: Function, // 上传之前检测
    onSuccess: Function// 成功
  },
  data() {
    return {
      loading: false,
      excelData: {
        header: null,
        results: null
      }
    }
  },
  methods: {
    handleDrop(e) {
      e.stopPropagation()
      e.preventDefault()
      if (this.loading) return
      const files = e.dataTransfer.files
      if (files.length !== 1) {
        this.$message.error('只支持上传一个文件!')
        return
      }
      const rawFile = files[0] // only use files[0]

      this.upload(rawFile)
      e.stopPropagation()
      e.preventDefault()
    },
    handleDragover(e) {
      e.stopPropagation()
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    },
    handleUpload() {
      this.$refs['excel-upload-input'].click()
    },
    handleClick(e) {
      const files = e.target.files
      const rawFile = files[0] // only use files[0]

      console.log(e.target.files)

      if (!rawFile) return
      this.upload(rawFile)
    },
    upload(rawFile) {
      this.$refs['excel-upload-input'].value = null // fix can't select the same excel

      const before = this.beforeUpload(rawFile)
      if (before) {
        //     创建文件对象     文件rawFile   文件名 rawFile.name
        const blobFile = new File([rawFile], rawFile.name)
        const fromData = new FormData()
        // 文件对象给拍进去
        fromData.append('file', blobFile)
        // 可以定一些后端需要的数据带进去
        fromData.append('fileName', 'ccc')

        axios.post('http://127.0.0.1:7001/upload', fromData).then(res => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      }
    }

  }
}
</script>

<style scoped>
.excel-upload-input{
  display: none;
  z-index: -9999;
}
.drop{
  border: 2px dashed #bbb;
  width: 600px;
  height: 160px;
  line-height: 160px;
  margin: 0 auto;
  font-size: 24px;
  border-radius: 5px;
  text-align: center;
  color: #bbb;
  position: relative;
}
</style>
