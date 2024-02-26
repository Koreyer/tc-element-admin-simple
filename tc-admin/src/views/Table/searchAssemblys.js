import { ref } from 'vue'
const assemblys = ref([
    {
        name: 'input',
        value: 'name',
        label: 'common.name',
        text: 'data.placeholder'
    }, {
        name: 'input',
        value: 'name',
        label: 'column.sex',
        text: 'data.placeholder'
    }, {
        name: 'select',
        value: 'value1',
        label: 'common.class',
        text: 'data.select',
        options: [{
            value: 'value1',
            label: 'label1'
        }, {
            value: 'value2',
            label: 'label2'
        }]
    },
    {
        name: 'button',
        change: () => searchChange(),
        text: 'data.search',
        label: 'data.search',
        type: 'search'
    }, {
        name: 'button',
        change: () => showDialog(),
        text: 'data.add',
        label: 'data.add',
        type: 'add'
    }
])

export default {
    assemblys
}