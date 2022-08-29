<template>
    <el-dropdown class="avatar-container" trigger="hover">
        <div class="avatar-wrapper">
            <el-avatar shape="circle" :size="30"></el-avatar>
            <span>张三</span>
            <el-icon class="el-icon--right">
                <ArrowDown />
            </el-icon>
        </div>
        <template #dropdown>
            <el-dropdown-menu class="user-dropdown">
                <el-dropdown-item @click="logout"> 退出 </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import store from '@/store'
import { ArrowDown } from '@element-plus/icons-vue'

const logout = async () => {
    try {
        await store.userStore.logoutAction()
        // 刷新页面
        location.reload()
    } catch (error) {
        console.log(error);
    }
}
</script>

<style lang="scss" scoped>
.avatar-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: var(--theme-header-height);

    .avatar-wrapper {
        display: flex;
        align-items: center;
        white-space: nowrap;
        cursor: pointer;
        padding: 0 8px;
        color: var(--theme-header-text-color);

        span {
            margin-left: 6px;
        }
    }

    //&:hover {
    //	background: var(--theme-header-hover-color);
    //}
}
</style>
