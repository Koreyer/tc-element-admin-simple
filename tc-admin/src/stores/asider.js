import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAsiderStore = defineStore('asider', () => {
    const activeIndex = ref('menu.dashboard')
    const breadcrumbs = ref([])
    const isCollapse = ref(false)
    const width = ref('200px')
    const editableTabsValue = ref('menu.dashboard')
    const editableTabs = ref([{ title: 'menu.dashboard', name: 'Dashboard' }])
    const changeWidth = () => {
        if (isCollapse.value) {
            width.value = '68px'
        } else {
            width.value = '200px'
        }
    }
    /**
     * 需要传入路由对象
     */
    const addTableTab = (obj) => {
        // console.log('obj', obj)
        if (editableTabs.value.find(x => x.name == obj.name) == undefined)
            editableTabs.value.push({ title: obj.title, name: obj.name })

    }
    /**
     * 移除标签页，保留最基础的Dashboard
     * @param {*} targetName 标签名称
     * @returns 
     */
    const removeTab = (targetName) => {
        if (targetName == 'menu.dashboard') {
            return false
        } else {
            editableTabs.value = editableTabs.value.filter((tab) => tab.name !== targetName)
            return true
        }
    }
    return { activeIndex, breadcrumbs, isCollapse, width, changeWidth, editableTabs, addTableTab, removeTab, editableTabsValue };
},
    {
        persist: true,
    },)
