<template>
  <div class="player">
    <!-- <div class="video-menu">비디오 서브 메뉴</div> -->
    <div class="video-body">
      <multi-video v-for="(data, idx) in videoData" :key="idx"
        ref="videoData"
        :videoId="data.id"
      />
    </div>
  </div>
</template>

<script>
import MultiVideo from "@/components/MultiVideo.vue";

export default {
  components: {
    MultiVideo
  },
  data() {
    return {
      videoData: [
        {id: "video1", refId: "refVideo1"},
        {id: "video2", refId: "refVideo2"}
      ],
      videoRefs: []
    }
  },
  created() {
    this.setVideo();
  },
  methods: {
    setVideo() {
      let videoScript = document.createElement("script");
      videoScript.setAttribute("src", `//vjs.zencdn.net/7.15.4/video.min.js`);
      videoScript.addEventListener("load", () => this.playVideo(), false);
      document.body.appendChild(videoScript);
      console.log("setvideo!!!");
    },
    playVideo() {
      console.log("playVideo!!!", this.$refs.videoData[0].videoFlag);
      this.$refs.videoData[0].videoFlag = true;
      this.$refs.videoData[0].videoInit();
      this.$refs.videoData[0].player.play();
      this.$refs.videoData[1].videoFlag = true;
      this.$refs.videoData[1].videoInit();
    }
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
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
</style>