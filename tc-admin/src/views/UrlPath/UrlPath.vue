<template>
    <p style="font-size: 20px;font-weight: 400;margin-bottom: 10px;">{{ $t(title) }}</p>

    <!-- 头部按钮 -->
    <div class="search-box">
        <el-button type="primary" @click="addShow">{{ $t('data.add') }}</el-button>
    </div>

    <!-- 表格 -->

    <el-table :data="datas" class="tableStyle" border stripe default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }" row-key="id">


        <el-table-column width="120" :label="$t('column.title')" align="center">
            <template #default="scope">
                {{ $t(scope.row.title) }}</template>
        </el-table-column>
        <el-table-column prop="name" :label="$t('column.name')" align="center"></el-table-column>
        <el-table-column prop="path" :label="$t('column.path')" align="center"></el-table-column>
        <el-table-column prop="component" :label="$t('column.component')" align="center"></el-table-column>
        <el-table-column fixed="right" :label="$t('column.operations')" min-width="120" align="center">
            <template #default="scope">
                <el-button type="primary" size="small" @click="eidtShow(scope.row)">{{ $t('data.edit') }}</el-button>
                <el-popconfirm :title="$t('data.delConfirm')" @confirm="del(scope.row.id)">
                    <template #reference>
                        <el-button type="danger" size="small">{{ $t('data.delete')
                            }}</el-button>
                    </template>
                </el-popconfirm>
            </template>
        </el-table-column>
    </el-table>

    <!-- 表单 -->
    <el-dialog v-model="formDialog" :title="$t(formParameter.title)" width="800" :before-close="handleClose">
        <el-form :model="data" ref="ruleFormRef" :rules="rules" hide-required-asterisk style="width: 80%;margin: auto;">
            <el-row>
                <el-col :span="9">
                    <el-form-item label="根路径">
                        <el-select v-model="parentId" @change="selectChange">
                            <el-option :value="0" label="/">
                            </el-option>
                            <el-option v-for="component in datas" :value="component.id" :label="$t(component.title)">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="9">
                    <el-form-item label="Id" prop="id" label-width="40">
                        <el-input v-model="data.id" clearable /></el-form-item>
                </el-col>
                <el-col :span="4">
                    <p style="text-align: right;line-height: 32px;">Count：{{ count }}</p>
                </el-col>
            </el-row>

            <el-row>

                <el-col :span="11">
                    <el-form-item :label="$t('column.title')" label-width="40" prop="title">
                        <el-input v-model="data.title" @input="titleChange" clearable />
                    </el-form-item></el-col>
                <el-col :span="12">
                    <el-form-item :label="$t('column.name')" label-width="50" prop="name">
                        <el-input v-model="data.name" clearable />
                    </el-form-item></el-col>
            </el-row>
            <el-row>

                <el-col :span="11">
                    <el-form-item :label="$t('column.path')" label-width="40" prop="path">
                        <el-input v-model="data.path" clearable />
                    </el-form-item></el-col>
                <el-col :span="12">
                    <el-form-item :label="$t('column.component')" label-width="50" prop="component">
                        <el-input v-model="data.component" clearable />
                    </el-form-item></el-col>
            </el-row>

        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="canelChange">{{ $t('data.cancel') }}</el-button>
                <el-button type="primary" v-if="formParameter.type == 'add'" @click="addChange(ruleFormRef)">
                    {{ $t('data.add') }}
                </el-button>
                <el-button type="primary" v-else @click="editChange(ruleFormRef)">
                    {{ $t('data.edit') }}
                </el-button>
            </div>
        </template>
    </el-dialog>

    <el-pagination style="padding-top: 30px;" background layout="total, sizes, prev, pager, next, jumper"
        :total="page.total" :page-sizes="[10, 30, 50, 100]" v-model:current-page="page.pageIndex"
        v-model:page-size="page.pageSize" @size-change="pageChange" @current-change="pageChange" />
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
import routerApi from '@/api/routerApi.js'
const title = 'menu.urlPath'
import inputHelp from '@/utils/inputHelp';

const parentId = ref(0)
const count = ref(0)
const formParameter = ref({
    title: 'data.add',
    type: 'add'
})

// search
//显示新增对话框
const addShow = () => {
    formParameter.value.title = 'data.add'
    formParameter.value.type = 'add'
    formDialog.value = true
    count.value = datas.value.length
    data.value = {
        path: '',
        title: '',
        component: '',
        name: '',
        id: '00',
        parentId: '00'
    }
    if (count.value / 10 >= 1) {
        data.value.id = (count.value / 10 + count.value % 10 + 1) + ''
    } else {
        data.value.id = '0' + (count.value + 1)
    }
    console.log('addChange')

}


const data = ref({
    path: '',
    title: '',
    component: '',
    name: '',
    id: '99',
    parentId: '00'
})

const datas = ref(routerApi.getRouter())

const formDialog = ref(false)


//校验
const titleChange = (value) => {
    data.value.title = inputHelp.isI18n(value)
}



//根路径下拉框
const selectChange = (value) => {
    if (value == 0) {
        count.value = datas.value.length
        if (count.value / 10 >= 1) {
            data.value.id = (count.value / 10 + count.value % 10 + 1) + ''
        } else {
            data.value.id = '0' + (count.value + 1)
        }

    } else {
        count.value = datas.value.find(x => x.id == value).children?.length || 0
        if (count.value / 10 >= 1) {
            data.value.id = (count.value / 10 + count.value % 10 + 1) + ''
        } else {
            data.value.id = '0' + (count.value + 1)
        }
    }

    data.value.parentId = '00'
    if (value != 0) {
        if (datas.value.find(x => x.id == value).children) {
            data.value.parentId = value
        }
    }

}


const eidtShow = (row) => {
    formParameter.value.title = 'data.edit'
    formParameter.value.type = 'edit'
    formDialog.value = true
    count.value = datas.value.length
    data.value = JSON.parse(JSON.stringify(row))
    console.log(data)

}

const del = (id) => {
    console.log('id', id)
}

const canelChange = () => {
    formDialog.value = false
}
const ruleFormRef = ref()
//表单校验
import { rules } from './rules.js'

const addChange = async (formEl) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
            formDialog.value = false
        } else {
            console.log('error submit!', fields)
        }
    })
}

const editChange = async (formEl) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
            formDialog.value = false

        } else {
            console.log('error submit!', fields)
        }
    })
}

const page = ref({
    total: 100,
    pageIndex: 1,
    pageSize: 10
})

const pageChange = () => {
    console.log(page.value)
}




</script>

<style lang="scss">
.mb20 {
    margin-bottom: 20px;
}

.search-box {
    margin-bottom: 20px;
}
</style>./components/CreateForm.vue