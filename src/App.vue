<template>
  <div class="video-container">
    <video autoplay muted controls
           src="https://vr-demo.oss-cn-beijing.aliyuncs.com/WeChat_20240909223215.mp4?Expires=1725924792&OSSAccessKeyId=TMP.3KdHmwH6LZQ3U9CQ9bHygh6YZ8Xs2YJpRGXRnuJQiQq4PL43F52W6Tyi9CqpejmfyRJ2Re3d6HckbwfGp3AnYPTBrcdMJR&Signature=Y%2Fyka1qa1kOMrlU%2FHpt7g24YgYw%3D">
    </video>
  </div>
</template>

<script setup>

</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: auto
}

video {
  width: 100%;
  height: auto;
  max-width: 100%;
  border-radius: 8px; /* Optional styling */
}
</style>
