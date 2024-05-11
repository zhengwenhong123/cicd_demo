<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'


const fileUpload = (e:any) => {
  fetch('https://api.roamrover.site/put').then(res => res.json()).then(res => {
    let file = e.target.files[0]
    const formData = new FormData()
    formData.append('key', file.name)
    formData.append('policy', res.policy)
    formData.append('OSSAccessKeyId', res.OSSAccessKeyId)
    formData.append('success_action_status', 200)
    formData.append('signature', res.signature)
    formData.append('file', file)
    fetch(res.host, {
      method: 'POST',
      body: formData
    })
  })


}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo"/>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo"/>
    </a>
  </div>
  <p>cicd</p>
  <input type="file" @change="fileUpload">
  <HelloWorld msg="Vite + Vue"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
