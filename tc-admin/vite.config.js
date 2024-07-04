import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })

export default defineConfig(({ mode, command }) => {
  // console.log("process///////", process.env)
  //当前env所在的目录 
  const env = loadEnv(mode, process.cwd(), '')
  // console.log('env//////', env)



  return {
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }, server: {
      //网站端口
      port: 1350
    }
  }
})
