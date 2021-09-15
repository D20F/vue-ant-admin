<template>
    <div class="userGroup">
        <el-button
            type="primary"
            @click="
                dialogFormVisible = true;
                form.mode = 'add';
            "
            >新增用户组</el-button
        >
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="roleName" label="名称" width="180">
            </el-table-column>
            <el-table-column prop="roleDescribe" label="备注" width="180">
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.row)"
                        >编辑</el-button
                    >
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.row)"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>

        <el-dialog
            title="权限配置"
            :visible.sync="dialogFormVisible"
            @close="dialogClose"
        >
            <el-input placeholder="输入关键字进行过滤" v-model="filterText">
            </el-input>
            <el-tree
                :data="tree"
                show-checkbox
                node-key="id"
                ref="tree"
                highlight-current
                :props="defaultProps"
                :filter-node-method="filterNode"
                :default-checked-keys="defaultSelect"
            >
            </el-tree>
            <el-form :model="form">
                <el-form-item label="名称" label-width="40px">
                    <el-input
                        v-model="form.roleName"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="备注" label-width="40px">
                    <el-input
                        v-model="form.roleDescribe"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirm">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import {
    adminRoleAdd,
    adminRoleModify,
    adminRoleAll,
    adminPermissionPage,
    adminRoleDelete,
} from "@/api/authority";

export default {
    name: "userGroup",
    data() {
        return {
            tableData: [],
            dialogFormVisible: false,
            form: {
                roleName: "",
                roleDescribe: "",
                mode: "",
                id: "",
            },
            tree: [],
            defaultProps: {
                children: "children",
                label: "name",
            },
            filterText: "",
            defaultSelect: [],
        };
    },
    computed: {},
    watch: {
        filterText(val) {
            this.$refs.tree.filter(val);
        },
    },
    created() {
        this.adminRoleAll();
        this.adminPermissionPage();
    },
    methods: {
        // 获取用户组
        adminRoleAll() {
            adminRoleAll().then((res) => {
                console.log(res);
                this.tableData = res;
            });
        },
        // 获取权限树
        adminPermissionPage() {
            adminPermissionPage().then((res) => {
                // console.log(res);
                this.tree = res;
            });
        },
        handleEdit(row) {
            this.dialogFormVisible = true;
            this.$nextTick(() => {
                this.setCheckedKeys(row.list);
            });
            this.form.id = row.id;
            this.form.roleDescribe = row.roleDescribe;
            this.form.roleName = row.roleName;
            this.form.mode = "edit";
        },
        handleDelete(row) {
            adminRoleDelete(row.id).then((res) => {
                this.$message({
                    message: "删除用户组成功",
                    type: "success",
                });
                this.adminRoleAll();
            });
        },
        dialogClose() {
            this.resetChecked();
            this.adminRoleAll();
            this.adminPermissionPage();
            this.form.roleName = "";
            this.form.roleDescribe = "";
        },
        flatTree() {
            // 扁平化 tree
            let cache = [];
            let parseArr = (data) => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].children instanceof Array) {
                        parseArr(data[i].children);
                        let obj = JSON.parse(JSON.stringify(data[i]));
                        obj.children = null;
                        cache.push(obj);
                    } else {
                        cache.push(data[i]);
                    }
                }
            };
            parseArr(this.tree);
            return cache;
        },
        // 获取 tree 所有key
        getTreeKey() {
            let key = [];
            let parseArr = (data) => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].children instanceof Array) {
                        parseArr(data[i].children);
                        key.push(data[i].id);
                    } else {
                        key.push(data[i].id);
                    }
                }
            };
            parseArr(this.tree);
            return key;
        },
        // 选中 tree node节点
        getSelectedNode() {
            // 选中key
            let key = [];
            key = this.$refs.tree
                .getCheckedKeys()
                .concat(this.$refs.tree.getHalfCheckedKeys());
            // 顶层
            let onCacheParent = [];
            // 次级
            let onCacheItem = [];
            for (let item of this.$refs.tree.getCheckedNodes(false, true)) {
                if (item.supName == null) {
                    onCacheParent.push(item);
                } else {
                    onCacheItem.push(item);
                }
            }

            let parseArr = (data) => {
                for (let i = 0; i < data.length; i++) {
                    if (key.indexOf(data[i].id) == -1) {
                        data.splice(i, 1);
                        i--;
                        if (data[i].children instanceof Array) {
                            parseArr(data[i].children);
                        }
                    }
                }
            };
            for (let i = 0; i < onCacheParent.length; i++) {
                parseArr(onCacheParent[i].children);
            }
            // 选中后的tree
            return onCacheParent;
        },
        confirm() {
            if (this.form.mode == "add") {
                let key = [];
                key = this.$refs.tree
                    .getCheckedKeys()
                    .concat(this.$refs.tree.getHalfCheckedKeys());
                let data = {
                    list: key,
                    roleName: this.form.roleName,
                    roleDescribe: this.form.roleDescribe,
                };
                adminRoleAdd(data).then((res) => {
                    this.$message({
                        message: "创建用户组成功",
                        type: "success",
                    });
                    this.dialogFormVisible = false;
                });
            } else if (this.form.mode == "edit") {
                let key = [];
                key = this.$refs.tree
                    .getCheckedKeys()
                    .concat(this.$refs.tree.getHalfCheckedKeys());
                let data = {
                    list: key,
                    roleName: this.form.roleName,
                    roleDescribe: this.form.roleDescribe,
                };
                adminRoleModify(this.form.id, data).then((res) => {
                    this.$message({
                        message: "修改用户组成功",
                        type: "success",
                    });
                    this.dialogFormVisible = false;
                });
            }
        },
        // 设置tree 选中
        setCheckedKeys(data) {
            this.$refs.tree.setCheckedKeys(data);
        },
        // 清空tree 选中
        resetChecked() {
            this.$refs.tree.setCheckedKeys([]);
        },
        // 过滤
        filterNode(value, data) {
            if (!value) return true;
            return data.name.indexOf(value) !== -1;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
