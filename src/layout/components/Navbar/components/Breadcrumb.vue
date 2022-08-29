<template>
    <el-breadcrumb separator="/" :separator-icon="ArrowRight" class="navbar-breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in levelList" :to="{ path: item.path }" :key="index">
            <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
import { computed } from 'vue'

const route = useRoute()
const levelList = computed(() => route.matched.filter(item => item.meta && item.meta.title))


</script>

<style lang="scss" scoped>
.navbar-breadcrumb {
    ::v-deep(.el-breadcrumb__inner) {
        color: var(--theme-header-text-color) !important;
    }

    padding-left: 10px;
}
</style>
