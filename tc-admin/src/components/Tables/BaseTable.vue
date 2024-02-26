<template>
    <el-table :data="props.datas" class="tableStyle" border stripe>
        <el-table-column type="selection" width="50" align="center" />
        <el-table-column v-for="column in props.columns" :prop="column.name" :label="$t(column.label)"
            :min-width="column.width || 120" align="center" />
        <el-table-column fixed="right" :label="$t('column.operations')" min-width="120" align="center">
            <template #default="scope">
                <el-button type="primary" size="small" @click="handleClick(scope.row)">{{ $t('data.edit') }}</el-button>
                <el-button type="danger" size="small">{{ $t('data.delete') }}</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>


<script setup>

const props = defineProps(['columns', 'datas'])
const emit = defineEmits('editData')

const handleClick = (data) => {
    emit('editData', data)
}



</script>


<style>
.tableStyle {
    width: 100%;
    height: 60vh;
}
</style>