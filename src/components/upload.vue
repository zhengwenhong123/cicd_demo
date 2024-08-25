<!--<template>-->

<!--  <n-upload-->
<!--      :action="host"-->
<!--      list-type="image"-->
<!--      :default-file-list="fileListRef"-->
<!--      show-download-button-->
<!--      @finish="handleUpload"-->
<!--  >-->
<!--    <n-button>上传文件</n-button>-->
<!--  </n-upload>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import {Ref, ref, UnwrapRef} from 'vue'-->
<!--import type {UploadFileInfo} from 'naive-ui'-->
<!--// import { useMessage } from 'naive-ui'-->
<!--interface upload {-->
<!--  host: string-->
<!--  policy: string-->
<!--  OSSAccessKeyId: string-->
<!--  signature: string-->
<!--}-->

<!--let host:Ref<UnwrapRef<string>> = ref("")-->
<!--// const message = useMessage()-->
<!--const fileListRef = ref<UploadFileInfo[]>([-->
<!--  {-->
<!--    id: 'a',-->
<!--    name: '我错了，但我可以改.png',-->
<!--    status: 'error'-->
<!--  },-->
<!--  {-->
<!--    id: 'd',-->
<!--    name: '现在还不行呢.doc',-->
<!--    status: 'uploading',-->
<!--    percentage: 50-->
<!--  },-->
<!--  {-->
<!--    id: 'c',-->
<!--    name: '现在就可下载哟.png',-->
<!--    status: 'finished',-->
<!--    url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'-->
<!--  }-->
<!--])-->
<!--const handleUpload = (file: UploadFileInfo) => {-->
<!--  fetch('https://api.roamrover.site/put').then(res => res.json()).then((res: upload) => {-->
<!--    host.value = res.host;-->
<!--    console.log(file);-->
<!--    fileListRef.value = file.fileList;-->
<!--    file?.fileList?.forEach((item:File) => {-->
<!--      console.log(item)-->
<!--      const formData = new FormData()-->
<!--      formData.append('key', item.name)-->
<!--      formData.append('policy', res.policy)-->
<!--      formData.append('OSSAccessKeyId', res.OSSAccessKeyId)-->
<!--      formData.append('success_action_status', '200')-->
<!--      formData.append('signature', res.signature)-->
<!--      formData.append('file', item.file)-->
<!--      fetch(res.host, {-->
<!--        method: 'POST',-->
<!--        body: formData-->
<!--      }).then(res=>console.log(res))-->
<!--    })-->
<!--  })-->
<!--}-->

<!--// const handleDownload = (file: UploadFileInfo) => {-->
<!--//   message.success(`下载成功：${file.name}`)-->
<!--// }-->

<!--</script>-->
<template>
  <div>1</div>
</template>
<script setup></script>