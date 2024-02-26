<template>
    <el-dialog v-model="props.dialogVisible" :title="$t(props.formType.title)" :width="props.formType.width"
        @closed="handleClose">
        <el-form :model="props.formData" :label-width="props.formType.labelWidth">
            <el-row>
                <el-col :span="(24 / (assembly.col || 1))" v-for="assembly in props.assemblys">
                    <el-form-item :label="$t(assembly.label)">
                        <!-- 输入框 -->
                        <el-input v-if="assembly.name == 'input'" v-model="assembly.value" :placeholder="$t(assembly.text)"
                            :type="assembly.type" />
                        <!-- 下拉框 -->
                        <el-select v-else-if="assembly.name == 'select'" v-model="assembly.value"
                            :placeholder="$t(assembly.text)">
                            <el-option :label="option.label" :value="option.value"
                                v-for="option in  assembly.selectOptions" />
                        </el-select>
                        <!-- 多选框 -->
                        <el-checkbox-group v-else-if="assembly.name == 'checkBox'" v-model="assembly.value">
                            <el-checkbox v-for="option in assembly.checkOptions" :label="option.label"
                                :name="option.value" />
                        </el-checkbox-group>
                        <!-- 单选 -->
                        <el-radio-group v-else-if="assembly.name == 'radio'" v-model="assembly.value">
                            <el-radio :label="option.value" v-for="option in assembly.radioOptions">
                                {{ option.label }}
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12"></el-col>
                <div v-for="button in props.buttons">
                    <el-col :span="6" v-if="formType.type == button.type || button.type == 'cancel'"
                        style="margin-left: 30px;">
                        <el-button @click="button.change"
                            :style="{ 'width': button.width, 'color': button.color || '#66686c', 'background-color': button.bgColor || 'white' }">{{
                                $t(button.text)
                            }}</el-button></el-col>
                </div>

            </el-row>
        </el-form>
    </el-dialog>
</template>


<script setup>


const props = defineProps(['dialogVisible', 'formType', 'assemblys', 'buttons', 'formData'])
const emit = defineEmits(['close'])


const handleClose = () => {
    props.assemblys.forEach(assembly => {
        props.formData[assembly.prop] = assembly.value
    })
    emit('close', props.formData)
}










</script>