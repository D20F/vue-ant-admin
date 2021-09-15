
<template>
    <el-popover
        placement="bottom-start"
        popper-class="pupop-select-icon"
        transition="el-zoom-in-top"
        trigger="click"
        v-model="popoverVisible"
        :disabled="disabledSelected"
    >
        <el-scrollbar
            v-if="popoverVisible"
            style="height: 300px"
            class="hide-x"
            :native="false"
            :noresize="false"
        >
            <div
                class="icon-item"
                v-for="item in options"
                :key="item"
                :class="{ 'is-active': isActive(item) }"
                @click="onClickSelected(item)"
            >
                <i :class="item"></i>
            </div>
        </el-scrollbar>

        <template slot="reference">
            <div
                :class="{
                    'mod-select-icon': 1,
                    'is-opened': popoverVisible,
                    'is-active': value,
                    'is-disabled': disabledSelected,
                }"
            >
                <div class="icon-item">
                    <i :class="value || 'el-icon-plus'"></i>
                </div>

                <div v-show="value" class="btn-clear">
                    <i class="el-icon-close" @click.stop="onClickClear()"></i>
                </div>
            </div>
        </template>
    </el-popover>
</template>

<script>
import icon from "./icon";

export default {
    name: "SelectIcon",

    data() {
        return {
            // 弹出框显示状态
            popoverVisible: false,
            // 选项数据，图标类名数组
            options: icon,
            value: "",
        };
    },
    props: {
        disabled: Boolean,
        // 接收绑定参数 - 图标类名
    },
    computed: {
        disabledSelected() {
            if (this.disabled) return true;
            return this.$parent.form ? this.$parent.form.disabled : false;
        },
    },
    methods: {
        // 是否为当前已选项
        isActive(item) {
            return this.value === item;
        },
        // 选中图标
        onClickSelected(item) {
            this.$emit("input", item);
            this.popoverVisible = false;
            this.value = item;
        },
        // 清空选项
        onClickClear() {
            this.$emit("input", "");
            this.value = "";
        },
    },
};
</script>


<style lang="scss" scoped>
.pupop-select-icon {
}
.hide-x {
    width: 400px;
    height: 400px;
}

.mod-select-icon {
    $size: 40px; // 图标项大小
    $col-count: 8; // 多少列
    $row-count: 4; // 多少行
    $scope: 5px; // 间隔
    $--border-color-base: #dcdfe6;
    $--color-primary: #409eff;
    $--background-color-base: #f5f7fa;
    $--color-info: #909399;
    $--color-danger: #f56c6c;
    $--color-white: #fff !default;
    $--color-success: #67c23a !default;
    $--color-info-light: mix($--color-white, $--color-info, 80%) !default;
    $--color-success-light: mix($--color-white, $--color-success, 80%) !default;

    position: relative;
    display: inline-block;
    width: $size + 2px;
    height: $size + 2px;
    border: 1px dashed $--border-color-base;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    outline: none;

    // 菜单打开状态
    &.is-opened,
    &:hover {
        border-color: $--color-primary;
    }
    // 禁用状态
    &.is-disabled:hover {
        border-color: $--border-color-base !important;
    }
    &.is-disabled,
    &.is-disabled > .icon-item,
    &.is-disabled > .btn-clear {
        // @extend .z-not-allowed;
        background-color: $--background-color-base;
    }
    // 已选状态
    &.is-active {
        border-style: solid;
        border-radius: 0;
        > .icon-item {
            width: $size;
            height: $size;
            line-height: $size;
            padding: $scope;
            text-align: center;
            cursor: pointer;
            > i {
                display: block;
                width: 100%;
                height: 100%;
                line-height: $size - ($scope * 2);
                color: $--color-white;
                background-color: $--color-primary;
            }
        }
    }
    > .icon-item > i {
        font-size: 16px;
    }
    > .icon-item > i.el-icon-plus {
        width: 100%;
        line-height: $size;
        font-size: ($size / 2);
        font-weight: bold;
        color: $--color-info;
        cursor: inherit;
    }

    // 清空按钮
    .btn-clear {
        width: 0;
        height: 0;
        border-width: ($size / 2) 0 0 ($size / 2);
        border-style: solid;
        border-color: $--color-danger transparent transparent transparent;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        > i.el-icon-close {
            position: absolute;
            top: -($size / 2);
            right: 0;
            color: $--color-white;
            font-size: 0.7em;
            &:hover {
                color: darken($--color-white, 5%);
            }
        }
    }

    // 弹出内容
    @at-root .el-popover.el-popper.pupop-select-icon {
        display: block;
        padding: 0;
        width: ($size + $scope * 2) * $col-count + 2px;
        height: ($size + $scope * 2) * $row-count;

        > .el-scrollbar {
            height: 100%;
        }
        .el-scrollbar__view {
            // @extend .fn-clear;
        }

        .icon-item {
            float: left;
            width: $size;
            height: $size;
            line-height: $size;
            margin: $scope;
            padding: $scope;
            text-align: center;
            cursor: pointer;
            &:hover {
                background-color: $--color-info-light;
            }
            &.is-active {
                background-color: $--color-success-light;
                border: 1px solid $--color-success;
            }
            > i {
                display: block;
                width: 100%;
                height: 100%;
                font-size: 16px;
                line-height: $size - ($scope * 2);
                color: $--color-white;
                background-color: $--color-primary;
            }
        }
    }
}
</style>
