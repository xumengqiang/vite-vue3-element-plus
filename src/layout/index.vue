<template>
    <el-container class="layout-container">
        <Sidebar />
        <el-container>
            <el-header class="layout-header" :style="layoutHeaderHeight">
                <Navbar />
                <Tabs v-if="theme.isTabsView" />
            </el-header>
            <router-view />
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar/index.vue'
import Tabs from '@/layout/components/Tabs/index.vue'
import { computed } from 'vue'
import store from '@/store'

const theme = computed(() => store.appStore.theme)
const layoutHeaderHeight = computed(() => {
    if (!theme.value.isTabsView) {
        return 'height:var(--theme-header-height) !important'
    } else {
        return ''
    }
})

</script>