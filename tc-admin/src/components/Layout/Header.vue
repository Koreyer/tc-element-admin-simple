<template>
    <div class="header">
        <el-row class="row-demo lh46">
            <el-col :span="1" class="fold-icon" @click="foldChange">
                <el-icon v-if="!asiderStore.isCollapse">
                    <Fold />
                </el-icon>
                <el-icon v-else>
                    <Expand />
                </el-icon>
            </el-col>
            <el-col :span="19">
                <el-breadcrumb separator="/" class="lh46">
                    <el-breadcrumb-item @click="replaceHome" :to="{ path: '/Dashboard' }">{{ $t('menu.dashboard')
                        }}</el-breadcrumb-item>
                    <span v-if="asiderStore.breadcrumbs.find(x => x != 'menu.dashboard')"><el-breadcrumb-item
                            v-for="item in asiderStore.breadcrumbs">{{ $t(item) }}</el-breadcrumb-item></span>
                </el-breadcrumb></el-col>

            <el-col :span="1">

                <el-dropdown trigger="click" @command="languageCommand">

                    <span class="el-dropdown-link">
                        <div class="lh46 avatar">
                            <svg class="icon el-icon" aria-hidden="true">
                                <use xlink:href="#icon-fanyi"></use>
                            </svg>
                        </div>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="zh">简体中文</el-dropdown-item>
                            <el-dropdown-item command="en">英文</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>


            </el-col>
            <el-col :span="3">
                <el-dropdown trigger="click" @command="avatarCommand">
                    <span class="el-dropdown-link">
                        <el-image class="avatar" src="/src/assets/img/avatar.jpg" fit="fill" />
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="dashboard">{{ $t('menu.dashboard') }}</el-dropdown-item>
                            <el-dropdown-item command="gitee">Gitee</el-dropdown-item>
                            <el-dropdown-item command="docs">{{ $t('login.docs') }}</el-dropdown-item>
                            <el-dropdown-item command="logOut" divided>{{ $t('login.logOut') }}</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>

            </el-col>
        </el-row>

    </div>

</template>



<script setup>
import { ref } from 'vue'

import { useRouter } from 'vue-router'
const router = useRouter()


//重置到首页
import { useAsiderStore } from '/src/stores/asider.js'
const asiderStore = useAsiderStore()
const replaceHome = () => {
    router.replace('dashboard')
    asiderStore.activeIndex = 'Dashboard'
    asiderStore.breadcrumbs = ['menu.dashboard']
    asiderStore.addTableTab({ name: 'Dashboard', title: 'menu.dashboard' })
}

//语言切换
import { useI18n } from 'vue-i18n'
const useI18 = useI18n()
const languageCommand = (command) => {
    useI18.locale.value = command
    localStorage.setItem("language", command)
}

//头像下拉框
const avatarCommand = (command) => {
    switch (command) {
        case 'logOut':
            localStorage.removeItem('token')
            router.replace('login')
            break;
        case 'dashboard':
            replaceHome()
            break;
        case 'docs':
            break;
        case 'gitee':
            break;


    }
}


//侧栏缩展功能
const foldChange = () => {
    asiderStore.isCollapse = !asiderStore.isCollapse
    asiderStore.changeWidth()
}

</script>


<style lang="scss">
.header {
    height: 56px;
    border-bottom: 2px solid rgba($color: #ccc, $alpha: .2);
    box-shadow: 0 2px 5px rgba(#f5f5f5, 0.1);

    .row-demo {

        .fold-icon:hover {
            cursor: pointer;
        }

        .avatar {
            width: 46px;
            height: 46px;
            margin-top: 5px;
            border-radius: 10px;
        }

        .avatar:hover {
            cursor: pointer;
        }

        .icon {
            width: 24px;
            height: 24px;
        }

    }

    .lh46 {
        line-height: 56px;
    }
}
</style>