<template>
  <div class="player">
    <div class="video-menu">비디오 서브 메뉴</div>
    <div class="video-body">
      비디오 내용
      <video class=""
      />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log("video!!!!");
  }
}
</script>

<style lang="less">
  .player {
    display: flex;
    flex-flow: column wrap;
    text-align: left;
    padding: 0 30px;
    
    .video-menu {
      width: 100%;
      height: 100%;
      padding: 30px 0;
    }

    .video-body {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
</style>