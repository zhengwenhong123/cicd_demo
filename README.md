# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.


# 注意事项:

```vue
    如果出现GitHub pages 部署成功但是预览白屏效果需要在vite.config.ts 里面配置base属性，
    设置成base:'./'即可
```
# git 推送网络出错:

```
    需要将本地proxy 先清除 
    cmd 命令:
        git config --global --unset http.proxy
        git config --global --unset https.proxy
```

