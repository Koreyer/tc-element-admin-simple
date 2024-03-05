<template>
    <el-table :data="props.datas" class="tableStyle" border stripe default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }" row-key="id">



        <el-table-column :label="$t('column.name')" align="center">
            <template #default="scope">
                {{ $t(scope.row.title) }}</template>
        </el-table-column>
        <el-table-column prop="city" :label="$t('column.city')" align="center"></el-table-column>
        <el-table-column fixed="right" :label="$t('column.operations')" min-width="120" align="center">

            <template #default="scope">
                <el-button type="primary" size="small" @click="edit(scope.row)">{{ $t('data.edit') }}</el-button>
                <el-popconfirm :title="$t('data.delConfirm')" @confirm="del(scope.row.id)">
                    <template #reference>
                        <el-button type="danger" size="small">{{ $t('data.delete')
                            }}</el-button>
                    </template>
                </el-popconfirm>
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