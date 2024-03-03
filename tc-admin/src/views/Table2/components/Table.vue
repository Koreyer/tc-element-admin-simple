<template>
    <el-table :data="props.datas" class="tableStyle" border stripe>
        <el-table-column type="selection" width="50" align="center" />
        <el-table-column prop="name" :label="$t('column.name')" align="center"></el-table-column>
        <el-table-column prop="city" :label="$t('column.city')" align="center"></el-table-column>
        <el-table-column fixed="right" :label="$t('column.operations')" min-width="120" align="center">
            <template #default="scope">
                <el-button type="primary" size="small" @click="edit(scope.row)">{{ $t('data.edit') }}</el-button>
                <el-button type="danger" size="small" @click="del(scope.row.id)">{{ $t('data.delete') }}</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>


<script setup>

const props = defineProps(['datas'])
const emits = defineEmits(['edit', 'del'])

const edit = (data) => {
    emits('edit', data)
}

const del = (id) => {
    emits('del', id)
}


</script>