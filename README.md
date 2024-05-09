
# 注意事项:

```vue
    如果出现GitHub pages 部署成功但是预览白屏效果需要在vite.config.ts 里面配置

        import { defineConfig } from 'vite'
        import vue from '@vitejs/plugin-vue'
        
        // https://vitejs.dev/config/
        export default defineConfig({
        base:'./',
        plugins: [vue()],

})

```
# git 推送网络出错:

```
    需要将本地proxy 先清除 
    cmd 命令:
        git config --global --unset http.proxy
        git config --global --unset https.proxy
```

