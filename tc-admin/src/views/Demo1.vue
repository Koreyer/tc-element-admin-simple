
<template>
    {{ $t('login.logIn') }}
    <el-button @click="setLange">{{ $t('change') }}</el-button>
    demo1
    <!-- {{ GLOBAL.titleName }} -->
</template>


<script setup>
import { getCurrentInstance } from 'vue'
const {
    proxy: { $global },
} = getCurrentInstance();
const { ctx } = getCurrentInstance();
console.log(ctx)

import { createI18n, useI18n } from 'vue-i18n'
const useI18 = useI18n()

const setLange = () => {
    localStorage.setItem('language', 'zh')
    console.log(123, useI18)
}


</script>