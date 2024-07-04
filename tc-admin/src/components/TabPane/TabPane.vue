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
        var item;
        // 选择末尾标签然后删除末尾标签的情况
        //删除末尾标签，然后将上一个标签当作新的末尾标签并且选中
        if (name == asiderStore.activeIndex && index == asiderStore.editableTabs.length) {
            item = asiderStore.editableTabs[index - 1]
        }
        //选择末尾标签然后删除前面标签的情况下
        if (name != asiderStore.activeIndex && index + 1 < asiderStore.editableTabs.length) {
            return
        }

        //删除当前标签
        if (name == asiderStore.activeIndex && index <= asiderStore.editableTabs.length - 1 || index == 0 && asiderStore.activeIndex == name) {
            console.log("jin")
            //1.下一个存在时选择下一个，2.下一个不存在时选择上一个
            if (asiderStore.editableTabs.length > 1) {
                item = asiderStore.editableTabs[index]
            } else {
                item = asiderStore.editableTabs[index - 1]
            }

        }
        asiderStore.activeIndex = item.name
        asiderStore.breadcrumbs = [item.title]
        router.replace(item.name)

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