<template>
  <div class="app-container">
    <el-button type="primary" @click="handleAddRole">New Role</el-button>

    <el-table
      :data="rolesList"
      style="width: 100%; margin-top: 30px"
      border
    >
      <el-table-column align="center" label="Role Key" width="220">
        <template slot-scope="scope">
          {{ scope.row.key }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Role Name" width="220">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="header-center" label="Description">
        <template slot-scope="scope">
          {{ scope.row.description }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Operations">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            @click="handleEdit(scope)"
          >Edit</el-button>
          <el-button
            type="danger"
            size="small"
            @click="handleDelete(scope)"
          >Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :visible.sync="dialogVisible"
      :title="dialogType === 'edit' ? 'Edit Role' : 'New Role'"
    >
      <el-form :model="role" label-width="80px" label-position="left">
        <el-form-item label="Name">
          <el-input v-model="role.name" placeholder="Role Name" />
        </el-form-item>
        <el-form-item label="Desc">
          <el-input
            v-model="role.description"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="Role Description"
          />
        </el-form-item>
        <el-form-item label="Menus">
          <el-tree
            ref="tree"
            :data="routesData"
            node-key="id"
            show-checkbox
            class="permission-tree"
          />
        </el-form-item>
      </el-form>
      <div style="text-align: right">
        <el-button
          type="danger"
          @click="dialogVisible = false"
        >Cancel</el-button>
        <el-button
          type="primary"
          @click="confirmRole"
        >Confirm</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routesData: [],
      rolesList: [],
      role: {
        name: '',
        description: ''
      },
      dialogVisible: false,
      dialogType: 'new'
    }
  },
  computed: {},
  created() {},
  mounted() {
    this.get_routesData()
    this.get_rolesList()
  },
  methods: {
    handleAddRole() {
      this.dialogType = 'new'
      this.dialogVisible = true
    },
    handleEdit() {
      this.dialogType = 'edit'
      this.dialogVisible = true
    },
    handleDelete() {
      console.log('删除')
    },
    getCheckedNodes() { // 获取已选节点 node-模式
      console.log(this.$refs.tree.getCheckedNodes())
    },
    getCheckedKeys() { // 获取已选节点 key-模式
      console.log(this.$refs.tree.getCheckedKeys())
    },
    setCheckedNodes() { // 设置已选节点 node-模式
      this.$refs.tree.setCheckedNodes([
        {
          id: 5,
          label: '二级 2-1'
        },
        {
          id: 9,
          label: '三级 1-1-1'
        }
      ])
    },
    setCheckedKeys() { // 设置已选节点 key-模式
      this.$refs.tree.setCheckedKeys([3])
    },
    resetChecked() { // 清空
      this.$refs.tree.setCheckedKeys([])
    },

    confirmRole() {},
    get_rolesList() {
      // getList().then(res => {
      this.rolesList = [
        {
          key: '@id',
          name: '@sentence(10, 20)',
          status: ['published', 'draft', 'deleted'],
          description: 'name'
        },
        {
          key: '@id',
          name: '@sentence(10, 20)',
          status: ['published', 'draft', 'deleted'],
          description: 'name'
        }
      ]
      //   })
    },
    get_routesData() {
      // getList().then(res => {
      this.routesData = [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ]
      //   })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
    .roles-table {
        margin-top: 30px;
    }
    .permission-tree {
        margin-bottom: 30px;
    }
}
</style>
