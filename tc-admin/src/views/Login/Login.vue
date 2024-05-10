<template>
    <div class="box">
        <div class="login-box">
            <div class="box-left">
                <div style="height: 160px;"></div>
                <div class="welcome">
                    <img :src="wel" style="width: 24px;height: 24px;">
                    <p style="font-size: 24px;">{{ $t('login.welcome') }}</p>
                    <p>{{ $t('login.tips') }}</p>
                </div>
                <div class="login">
                    <el-form :model="account" ref="ruleFormRef" :rules="rules">
                        <el-form-item prop="email">
                            <el-input v-model="account.email" :placeholder="$t('login.email')" clearable
                                :prefix-icon="Message" />
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input v-model="account.password" type="password" :placeholder="$t('login.password')"
                                clearable :prefix-icon="Lock" />
                        </el-form-item>
                        <div style="display: flex;justify-content: space-between;height: 32px;line-height: 32px;">
                            <p>
                                <el-checkbox size="small" v-model="remember"
                                    :label="$t('login.remember')"></el-checkbox>
                            </p>
                            <p class="forgot">{{ $t('login.forgot') }}</p>
                        </div>



                        <el-form-item>
                            <el-button @click="login(ruleFormRef)" class="login-button">{{ $t('login.logIn')
                                }}</el-button>
                        </el-form-item>
                    </el-form>
                    <el-divider>
                        <span style="color: #a1a1a1;">or</span>
                    </el-divider>
                    <div class="third-party"><svg v-for="item in thirdParty" class="icon" aria-hidden="true">
                            <use :xlink:href="'#icon-' + item.icon"></use>
                        </svg></div>
                </div>
            </div>
            <div class="bac">
                <img :src="bg" alt="">
            </div>
        </div>
    </div>
</template>


<script setup>
import bg from '@/assets/img/bg.png'
import wel from '@/assets/img/home.png'
import { Message, Lock } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
import inputHelp from '@/utils/inputHelp'
import api from './api'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useI18n } from 'vue-i18n';
const remember = ref(Boolean(localStorage.getItem('remember')) || false)



//表单校验
import rule from './rules'
const ruleFormRef = ref()
const rules = reactive(rule.rules)





const account = ref({
    email: localStorage.getItem('email') || '',
    password: localStorage.getItem('ac') || ''
})

const { t } = useI18n();
const login = async (formEl) => {
    // if (!formEl) return
    console.log(formEl)
    await formEl.validate((valid, fields) => {
        console.log(22)
        if (valid) {
            api.loginByEmail(account.value).then(res => {
                if (res.success) {
                    localStorage.setItem('token', res.token)
                    if (remember.value) {
                        localStorage.setItem('remember', true)
                        localStorage.setItem('email', account.value.email)
                        localStorage.setItem('ac', account.value.password)
                    }
                    ElMessage({
                        message: t('login.success'),
                        type: 'success',
                        duration: 2000,
                        onClose: () => {
                            router.push('dashboard')
                        }
                    })
                } else {
                    let message = t('login.faild')
                    if (res.code == 423) {
                        message = t('login.lockOut')
                    }
                    ElMessage({
                        message: message,
                        type: 'error'
                    })
                }
            })
        } else {
            console.log('error submit!', fields)
        }
    })





}


const thirdParty = ref([{
    link: '',
    icon: 'qq'
}, {
    link: '',
    icon: 'github'
}, {
    link: '',
    icon: 'google'
}, {
    link: '',
    icon: 'microsoft'
}]) 
</script>



<style lang="scss">
.box {
    padding: 89.5px 0;
    background: linear-gradient(#f9fafc, #e3ebf6);

    .login-box {
        width: 70vw;
        height: 700px;
        background-color: white;
        border-radius: 80px;
        margin: auto;
        padding: 20px;
        display: flex;
        justify-content: space-between;

        .box-left {
            height: 100%;
            width: 48%;

            .welcome {
                height: 140px;
                width: 300px;
                margin: auto;
                text-align: center;

            }

            .login {
                width: 240px;
                height: 300px;
                margin: auto;

                .forgot {
                    font-size: 12px;
                    color: #a1a1a1;
                    text-align: right;
                }

                .forgot:hover {
                    cursor: pointer;
                    color: #1b31ba
                }

                .login-button {
                    margin: 30px auto;
                    width: 240px;
                    border-radius: 23px;
                    background-color: #122db0;
                    color: white;
                }

                .third-party {
                    width: 160px;
                    display: flex;
                    justify-content: space-between;
                    margin: auto;

                    .icon:hover {
                        cursor: pointer;
                    }
                }
            }
        }

        .bac {
            height: 100%;
            width: 48%;
            border-radius: 80px;
            overflow: hidden;
        }
    }


    .el-input__wrapper {
        border-radius: 23px;
    }
}
</style>