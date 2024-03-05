<template>
    <el-dialog v-model="props.visible" :title="props.title" width="500" :before-close="handleClose">
        <el-form :model="props.data" ref="ruleFormRef" :rules="rules" hide-required-asterisk
            style="width: 80%;margin: auto;">
            <el-form-item :label="$t('column.name')" prop="name">
                <el-input v-model="props.data.name" />
            </el-form-item>
            <el-form-item :label="$t('column.city')" prop="city">
                <el-input v-model="props.data.city" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="canelChange">{{ $t('data.cancel') }}</el-button>
                <el-button type="primary" @click="addChange(ruleFormRef)">
                    {{ $t('data.add') }}
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';


const props = defineProps(['title', 'visible', 'data'])
const emits = defineEmits(['canelChange', 'addChange'])

const canelChange = () => {
    emits('canelChange', false)
}

const addChange = (formEl) => {
    formEl.validate((valid, fields) => {
        if (valid) {
            emits('addChange', true)
        } else {
            console.log('error submit!', fields)
        }
    })
    
}

const handleClose = () => {
    canelChange()
}

import type { FormInstance } from 'element-plus'
const ruleFormRef = ref<FormInstance>()
const rules = reactive({
    name: [
        { required: true, message: '请输入名称', trigger: 'blur' }
    ],
    city: [
        { required: true, message: '请输入城市', trigger: 'blur' }
    ]
})

</script>