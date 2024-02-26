import { ref } from 'vue'

const buttons = ref([
    {
        name: 'button',
        text: 'data.add',
        type: 'add',
        color: 'white',
        bgColor: '#409EFF',
        width: '100px',
        change: () => {

        }

    }, {
        name: 'button',
        text: 'data.edit',
        type: 'edit',
        color: 'white',
        bgColor: '#409EFF',
        width: '100px',
        change: () => {

        }

    }, {
        name: 'button',
        text: 'data.cancel',
        type: 'cancel',
        color: '',
        bgColor: '',
        width: '100px',
        change: () => {

        }
    }
])

export default {
    buttons
}

