<template>
    <el-button type="primary" @click="login">Primary</el-button>
</template>

<script lang="ts" setup>
import store from '@/store'
import { useRouter } from 'vue-router'
const router = useRouter()

function login() {
    store.userStore.loginAction()
    router.push({ path: '/home' })
}
</script>