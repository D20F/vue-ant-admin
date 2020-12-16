<template>
    <div class="app-container">
        <div>
            <FilenameOption v-model="filename" />
            <AutoWidthOption v-model="autoWidth" />
            <BookTypeOption v-model="bookType" />
            <el-button
                :loading="downloadLoading"
                style="margin: 0 0 20px 20px"
                type="primary"
                icon="el-icon-document"
                @click="handleDownload"
            >
                Export Excel
            </el-button>
        </div>

        <el-table
            ref="table"
            :data="rolesList"
            style="width: 100%; margin-top: 30px"
            border
            @selection-change="handleSelectionChange"
        >
            <el-table-column type="selection" align="center" />
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
                    {{ scope.row.status }}
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import FilenameOption from "./components/FilenameOption";
import AutoWidthOption from "./components/AutoWidthOption";
import BookTypeOption from "./components/BookTypeOption";

export default {
    data() {
        return {
            List: [],
            rolesList: [],
            listLoading: true,
            downloadLoading: false,
            autoWidth: true,
            bookType: "xlsx",
            filename: "",
        };
    },
    components: { FilenameOption, AutoWidthOption, BookTypeOption },
    computed: {},
    created() {},
    mounted() {
        this.get_rolesList();
        this.$refs.table.toggleAllSelection(); //表格默认全部选中

    },
    methods: {
        // 导出下载
        handleDownload() {
            this.downloadLoading = true;
            import("@/utils/vendor/Export2Excel").then((excel) => {
                // const multiHeader = [[],[]]; // 合并标题头数组形式
                // const merges = ['A1:A2', 'B1:D1', 'E1:E2'] // 合并单元格 配合标题头合并
                const tHeader = ["id", "Title", "Author", "status"];
                const filterVal = ["key", "name", "status", "description"];
                const list = this.List;
                const data = this.formatJson(filterVal, list);

                excel.export_json_to_excel({
                    // multiHeader,
                    header: tHeader,
                    // merges,
                    data,
                    filename: this.filename,
                    autoWidth: this.autoWidth,
                    bookType: this.bookType,
                });
                this.downloadLoading = false;
            });
        },
        // 表格选择数据
        handleSelectionChange(val) {
            this.List = val;
        },
        // 格式化数据
        formatJson(filterVal, jsonData) {
            return jsonData.map((v) =>
                filterVal.map((j) => {
                    return v[j];
                })
            );
        },
        get_rolesList() {
            // getList().then(res => {
            this.rolesList = [
                {
                    key: "@id",
                    name: "@sentence(10, 20)",
                    status: "published",
                    description: "name",
                },
                {
                    key: "@id",
                    name: "@sentence(10, 20)",
                    status: "published",
                    description: "name",
                },
            ];
            this.List = this.rolesList;
            //   })
        },
    },
};
</script>

<style lang="scss" scoped>
.app-container {
}
</style>
