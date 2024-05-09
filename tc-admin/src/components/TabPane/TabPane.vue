<template>
    <div class="tab-pane">

        <el-tag class="tab-item" v-for="(item, index) in asiderStore.editableTabs" closable type="primary"
            @click="indexChange(item)" @close="closeChange(item.name, index)"
            :effect="asiderStore.activeIndex == item.name ? 'light' : 'plain'">
            {{ $t(item.title) }}
        </el-tag>
    </div>
</template>

<script setup>
import { useAsiderStore } from '@/stores/asider'
import { useRouter } from 'vue-router';
const router = useRouter()
const asiderStore = useAsiderStore()



const indexChange = (item) => {
    // asiderStore.addTableTab(item)
    asiderStore.activeIndex = item.name
    asiderStore.breadcrumbs = [item.title]
    router.replace(item.name)
}

const closeChange = (name, index) => {
    if (asiderStore.editableTabs.length > 1) {
        asiderStore.removeTab(name)
        if (asiderStore.activeIndex == name) {
            const item = asiderStore.editableTabs[index - 1]
            asiderStore.activeIndex = item.name
            asiderStore.breadcrumbs = [item.title]
            router.replace(item.name)
        }
    }


}
</script>


<style lang="scss">
.tab-pane {
    display: flex;
    justify-content: left;
    height: 30px;
    /* background-color: red; */
    /* bottom: 5px 0; */
    border-bottom: 2px solid #f5f5f5;
}

.tab-item {
    padding: 0 15px;
    font-size: 14px;
    /* color: #333; */
    /* border: 1px solid #409eff; */
    margin: 0 10px;
}

.tab-item:hover {
    cursor: pointer;
}

.el-main {
    --el-main-padding: 6px 20px 20px 20px;
}
</style>