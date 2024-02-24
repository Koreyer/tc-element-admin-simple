
<template>
    <el-button @click="submit">{{ $t('login.logIn') }}</el-button>
    <el-button @click="sendEmail">SendEmail</el-button>
    <BaseTable>
        <template #search>
            <el-select v-model="value" class="m-2" :placeholder="$t('data.select')" style="width: 240px;">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </template>
    </BaseTable>
    <!-- {{ GLOBAL.titleName }} -->
</template>


<script setup>
import { getCurrentInstance } from 'vue'
const {
    proxy: { $global },
} = getCurrentInstance();
const { ctx } = getCurrentInstance();
console.log(ctx)


import api from '@/api/userApi'
const submit = () => {
    var res = api.login({ email: 'zzh164@qq.com', password: '123456' })
    console.log(res)
}

const sendEmail = () => {
    var res = api.sendEmail('1643017482@qq.com')
    console.log(res)
}



import BaseTable from '../components/Tables/BaseTable.vue';


</script>