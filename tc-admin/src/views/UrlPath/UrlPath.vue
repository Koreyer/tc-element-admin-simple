<template>
    <p style="font-size: 20px;font-weight: 400;margin-bottom: 10px;">{{ $t(title) }}</p>
    <Search @add="addShow" class="mb20" />
    <Table :datas="datas" @edit="eidtShow" @del="del" />
    <CreateForm :visible="addDialog" title="新增" :data="newData" @canelChange="canelChange" @addChange="addChange">
    </CreateForm>
    <EditForm :visible="editDialog" title="编辑" :data="editData" @canelChange="canelChange" @editChange="editChange">
    </EditForm>

    <el-pagination style="padding-top: 30px;" background layout="total, sizes, prev, pager, next, jumper"
        :total="page.total" :page-sizes="[10, 30, 50, 100]" v-model:current-page="page.pageIndex"
        v-model:page-size="page.pageSize" @size-change="pageChange" @current-change="pageChange" />
</template>

<script setup>
import Search from './components/Search.vue';
import Table from './components/Table.vue';
import CreateForm from './components/CreateForm.vue'
import EditForm from './components/EditForm.vue';
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import routerApi from '@/api/routerApi.js'
const title = 'menu.urlPath'

const datas = ref(routerApi.getRouter())


const newData = ref({
    city: '',
    name: ''
})
const editData = ref({
    city: '',
    name: ''
})

const addDialog = ref(false)
const editDialog = ref(false)


const searchValue = ref({
    name: '',
    fullName: ''
})


const addShow = () => {
    addDialog.value = true
    newData.value = {
        name: '',
        city: ''
    }
    console.log('addChange')

}


const eidtShow = (data) => {
    editDialog.value = true
    editData.value = data

}

const del = (id) => {
    console.log('id', id)
}

const canelChange = (x) => {
    addDialog.value = x
}

const addChange = (x) => {
    if (x) {
        ElMessage({
            message: '新增成功!',
            type: 'success',
        })
        console.log(newData.value)
    }
    addDialog.value = false
}

const editChange = (x) => {
    if (x) {
        console.log(editData.value)
        ElMessage({
            message: '编辑成功!',
            type: 'success',
        })
    }
    editDialog.value = false
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
</style>./components/CreateForm.vue