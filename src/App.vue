<template>
    <el-config-provider :size="size" :z-index="zIndex">
        <el-row class="mb-4">
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger" @click="toggleDark">{{ isDark }}</el-button>
            <el-switch inline-prompt v-model="theme" @click="toggleDark()">
            </el-switch>
        </el-row>
    </el-config-provider>
</template>
<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import { useDark, useToggle } from '@vueuse/core'
import { ref } from '@vue/reactivity'


const theme = ref(false)

const isDark = useDark()
const toggleDark: any = useToggle(isDark)

const zIndex: number = 3000;
const size: any = "small"
</script>
<style scoped>
</style>
