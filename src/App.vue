<template>
    <el-config-provider :size="size">
        <router-view></router-view>
    </el-config-provider>
</template>
<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import store from '@/store';
import { computed } from '@vue/runtime-core';


const size = computed(() => store.appStore.componentSize)
</script>
<style scoped>
</style>
