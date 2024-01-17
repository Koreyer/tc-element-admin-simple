import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAsiderStore = defineStore('asider', () => {
    const activeIndex = ref('Demo4')
    const breadcrumbs = ref([])
    const isCollapse = ref(false)
    const width = ref('200px')
    const changeWidth = () => {
        if (isCollapse.value) {
            width.value = '68px'
        } else {
            width.value = '200px'
        }
    }
    return { activeIndex, breadcrumbs, isCollapse, width, changeWidth };
},
    {
        persist: true,
    },)
