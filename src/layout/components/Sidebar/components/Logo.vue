<template>
    <div v-if="store.appStore.sidebarOpened" class="sidebar-logo">
        <span class="logo-title"> Vue3+Vite+Element</span>
    </div>
    <div v-else class="sidebar-logo sidebar-logo-expend">
        <span>vue</span>
    </div>
</template>

<script setup lang="ts">
import store from '@/store'
</script>

<style lang="scss" scoped>
.sidebar-logo {
    width: var(--theme-aside-width) !important;
    height: var(--theme-header-height);
    line-height: var(--theme-header-height);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgb(0 21 41 / 2%) 0 1px 4px;
    color: var(--theme-logo-text-color);
    font-size: 18px;

    .el-avatar {
        width: 25px;
        height: 25px;
    }

    .logo-title {
        margin-left: 10px;
    }
}

.sidebar-logo-expend {
    width: 100% !important;
}
</style>
