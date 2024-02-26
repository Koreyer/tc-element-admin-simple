import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()
import useEnv from "@/hooks/useEnv";
import user from "./userUtil"
import { ElLoading, ElMessage } from 'element-plus'
let reqConfig
let loadingE
const VITE_BASE_API = useEnv.VITE_BASE_API;

const service = axios.create({
    baseURL: VITE_BASE_API,
    timeout: 10 * 1000, // 请求超时时间
    headers: { "Content-Type": "application/json;charset=UTF-8" }
});



//请求
service.interceptors.request.use((request) => {
    // token setting
    request.headers['Authorization'] = 'Bearer ' + user.getToken()
    /* download file*/
    if (request.isDownLoadFile) {
        request.responseType = 'blob'
    }
    /* upload file*/
    if (request.isUploadFile) {
        request.headers['Content-Type'] = 'multipart/form-data'
    }
    reqConfig = request
    if (request.bfLoading) {
        loadingE = ElLoading.service({
            lock: true,
            text: '数据载入中',
            // spinner: 'el-icon-ElLoading',
            background: 'rgba(0, 0, 0, 0.1)'
        })
    }
    /*
     *params会拼接到url上
     * */
    if (request.isParams) {
        request.params = request.data
        request.data = {}
    }
    return request
},
    (err) => {
        Promise.reject(err)
    });


service.interceptors.response.use(
    (res) => {
        if (reqConfig.afHLoading && loadingE) {
            loadingE.close()
        }
        // 如果是下载文件直接返回
        if (reqConfig.isDownLoadFile) {
            return res
        }
        const { status } = res
        const { token } = res.data
        if (token != undefined) {
            user.setToken(token)
        }
        if (status == 200) {
            return res.data
        }
    }, (err) => {
        const { status } = err.response
        ElMessage({
            message: err.message,
            type: 'warning',
            duration: 2000,
            onClose: () => {
                if (status == 401) {
                    router.push('login')
                }
            }
        })



    })





export function axiosRequest({
    url,
    data,
    method,
    isParams,
    bfLoading,
    afHLoading,
    isUploadFile,
    isDownLoadFile,
    baseURL,
    timeout,
    isAlertErrorMsg = true
}) {
    return service({
        url: url,
        method: method ?? 'get',
        data: data ?? {},
        isParams: isParams ?? false,
        bfLoading: bfLoading ?? false,
        afHLoading: afHLoading ?? true,
        isUploadFile: isUploadFile ?? false,
        isDownLoadFile: isDownLoadFile ?? false,
        isAlertErrorMsg: isAlertErrorMsg,
        baseURL: baseURL ?? import.meta.env.VITE_APP_BASE_URL,
        timeout: timeout ?? 15000
    })
}

export default axiosRequest