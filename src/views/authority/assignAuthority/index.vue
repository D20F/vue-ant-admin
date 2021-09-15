<template>
    <div class="assignAuthority">
        <div class="left">
            <div class="header">
                <el-input
                    placeholder="输入关键字进行过滤"
                    v-model="filterText"
                />
                <el-button @click="open" type="primary">新增顶层菜单</el-button>
            </div>
            <el-tree
                :data="tree"
                node-key="id"
                ref="tree"
                highlight-current
                :props="defaultProps"
                :filter-node-method="filterNode"
                :default-checked-keys="defaultSelect"
                @current-change="currentChange"
            >
                <span class="custom-tree-node" slot-scope="{ data }">
                    <i
                        v-if="data.type == 2"
                        class="el-icon-picture-outline-round"
                    ></i>
                    <i v-else-if="data.type == 1" :class="data.icon"></i>
                    <span>{{ data.name }}</span>
                    <span v-if="data.name == form.name">
                        <el-button
                            v-if="data.type == 1"
                            type="text"
                            size="mini"
                            @click.stop="() => append(data)"
                        >
                            新增
                        </el-button>
                        <el-button
                            type="text"
                            size="mini"
                            @click.stop="() => remove(data)"
                        >
                            删除
                        </el-button>
                    </span>
                </span>
            </el-tree>
        </div>

        <div class="right">
            <el-form :model="form">
                <el-form-item label="上级菜单" label-width="70px">
                    <el-input
                        :disabled="true"
                        v-model="form.supName"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="URL" label-width="70px">
                    <el-input
                        v-model="form.menuPath"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="名称" label-width="70px">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item
                    v-if="form.type == 1"
                    label="选择图标"
                    label-width="70px"
                >
                    <div style="display: flex">
                        <iconPicker v-model="form.icon" />
                        <el-input
                            :disabled="true"
                            v-model="form.icon"
                            autocomplete="off"
                        ></el-input>
                    </div>
                </el-form-item>
                <el-form-item
                    v-else-if="form.type == 2"
                    label="按钮标识"
                    label-width="70px"
                >
                    <el-input
                        v-model="form.identify"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>

                <el-form-item label="备注" label-width="70px">
                    <el-input
                        v-model="form.content"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="confirm">确 定</el-button>
            </div>
        </div>

        <el-dialog title="新增" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="上级菜单" label-width="70px">
                    <el-input
                        :disabled="true"
                        v-model="form.supName"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="名称" label-width="70px">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="选择类型" label-width="70px">
                    <el-button type="primary" @click="form.type = 1"
                        >菜单</el-button
                    >
                    <el-button type="success" @click="form.type = 2"
                        >按钮</el-button
                    >
                </el-form-item>
                <el-form-item
                    v-if="form.type == 1"
                    label="URL"
                    label-width="70px"
                >
                    <el-input
                        v-model="form.menuPath"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>

                <el-form-item
                    v-if="form.type == 1"
                    label="选择图标"
                    label-width="70px"
                >
                    <div style="display: flex">
                        <iconPicker v-model="form.icon" />
                        <el-input
                            :disabled="true"
                            v-model="form.icon"
                            autocomplete="off"
                        ></el-input>
                    </div>
                </el-form-item>
                <el-form-item
                    v-if="form.type == 2"
                    label="按钮标识"
                    label-width="70px"
                >
                    <el-input
                        v-model="form.identify"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>

                <el-form-item label="备注" label-width="70px">
                    <el-input
                        v-model="form.content"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogConfirm"
                    >确 定</el-button
                >
            </div>
        </el-dialog>
    </div>
</template>

<script>
import iconPicker from "./component/iconPicker.vue";
import {
    adminPermissionPage,
    adminPermissionAdd,
    adminPermissionDelete,
    adminPermissionModify,
} from "@/api/authority";

export default {
    name: "assignAuthority",
    components: {
        iconPicker,
    },
    mixins: [],
    data() {
        return {
            tree: [],
            form: {
                supName: "", //上级菜单  顶层为''空
                content: "", //备注
                icon: "", //
                menuPath: "", // 路径
                name: "", //
                type: "", // 1页面 2按钮
                pid: "", //pid
                identify: "", // 按钮标识
                sequence: "", // 排序
            },
            defaultProps: {
                children: "children",
                label: "name",
            },
            filterText: "",
            dialogFormVisible: false,
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
        this.init();

     
    },
    methods: {
        init() {
            this.adminPermissionPage();
        }, // 获取权限树
        adminPermissionPage() {
            adminPermissionPage().then((res) => {
                console.log(res);
                this.tree = res;
            });
        },
        open() {
            for (const item in this.form) {
                if (item == "sequence") {
                    this.form.sequence = this.tree.length + 1;
                } else if (item == "type") {
                    this.form.type = 1;
                } else {
                    this.form[item] = "";
                }
            }
            this.dialogFormVisible = true;
        },
        clear() {
            for (const item in this.form) {
                this.form[item] = "";
            }
        },
        currentChange(v) {
            let data = JSON.parse(JSON.stringify(v));
            this.form = data;
            console.log(v);
        },
        confirm() {
            adminPermissionModify(this.form.id, this.form).then((res) => {
                console.log(res);
                this.adminPermissionPage();
                this.clear();
            });
        },
        dialogConfirm() {
            adminPermissionAdd(this.form).then((res) => {
                console.log(res);
                this.adminPermissionPage();
                this.clear();
                this.dialogFormVisible = false;
            });
        },
        append(v) {
            let data = JSON.parse(JSON.stringify(v));
            // console.log(data);
            for (const item in this.form) {
                this.form[item] = "";
            }
            this.form.pid = data.id;
            this.form.supName = data.name;
            this.form.type = 1;
            this.dialogFormVisible = true;
            // console.log(this.form);
        },
        remove(data) {
            console.log(data);
            adminPermissionDelete(data.id).then((res) => {
                console.log(res);
                this.adminPermissionPage();
            });
        },
        filterNode(value, data) {
            if (!value) return true;
            return data.name.indexOf(value) !== -1;
        },
    },
};
</script>

<style lang="scss" scoped>
.assignAuthority {
    display: flex;
    justify-content: space-around;
    width: 100%;
}
.left {
    width: 40%;
    .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
.right {
    width: 40%;
}
.custom-tree-node {
    span:nth-child(2) {
        margin: 0 8px;
    }
}
</style>
