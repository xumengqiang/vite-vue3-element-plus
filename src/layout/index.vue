<template>
    <el-container class="layout-container">
        <Sidebar />
        <router-view></router-view>
    </el-container>
</template>

<script lang="ts" setup>
import Sidebar from './components/Sidebar/index.vue'

</script>