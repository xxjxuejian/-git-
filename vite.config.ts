import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const pathSrc = path.resolve(__dirname, "src");
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
  plugins: [
    vue(),
    // 自动导入API
    AutoImport({
      imports: ["vue", "@vueuse/core", "pinia", "vue-router"],
      // 导入 Element Plus函数，如：ElMessage, ElMessageBox 等
      // 比如代码中使用 ElMessage.success() 时，会自动导入 ElMessage
      resolvers: [ElementPlusResolver()],

      eslintrc: {
        enabled: true, // 是否自动生成 eslint 规则，建议生成之后设置 false
        filepath: "./.eslintrc-auto-import.json", // 指定自动导入函数 eslint 规则的文件
        globalsPropValue: true,
      },
      vueTemplate: true, //允许在 .vue 模板中使用自动导入的函数
      // 导入函数TS类型声明文件路径
      //  dts: false,
      dts: "src/types/auto-imports.d.ts", // 指定自动导入函数TS类型声明文件路径
    }),
    // 自动导入组件
    Components({
      // 导入 Element Plus 组件，比如代码中使用组件 el-table等时，会自动导入
      resolvers: [ElementPlusResolver()],
      // 指定自定义组件位置(默认:src/components)
      dirs: ["src/components", "src/**/components"],
      // 导入组件类型声明文件路径 (false:关闭自动生成)
      //  dts: false,
      dts: "src/types/components.d.ts", // 指定自动导入组件TS类型声明文件路径
    }),
  ],
});
