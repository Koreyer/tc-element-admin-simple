<template>
    <p style="font-size: 20px;font-weight: 400;margin-bottom: 10px;">{{ $t(title) }}</p>
    <Search :search="searchValue" @searchChange='searchChange' :add="addShow" class="mb20" />
    <Table :datas="datas" @edit="eidtShow" @del="del" />
    <CreateForm :visible="addDialog" title="新增" :data="newData">
    </CreateForm>
</template>

<script setup>
import Search from './components/Search.vue';
import Table from './components/Table.vue';
import CreateForm from './components/CreateForm.vue'
import { ref } from 'vue'
const title = 'menu.table'

const datas = ref([
    {
        id: 1,
        city: '深圳',
        name: '小明'
    }, {
        id: 2,
        city: '广州',
        name: '小红'
    }
])


const newData = ref({
    city: '',
    name: ''
})

const addDialog = ref(false)


const searchValue = ref({
    name: '',
    fullName: ''
})

const searchChange = () => {
    console.log('searchChange', searchValue.value)
}

const addShow = () => {
    addDialog.value = true
    console.log('addChange')

}

const eidtShow = (data) => {
    console.log('data', data)
}

const del = (id) => {
    console.log('id', id)
}


</script>

<style lang="scss">
.mb20 {
    margin-bottom: 20px;
}
</style>./components/CreateForm.vue