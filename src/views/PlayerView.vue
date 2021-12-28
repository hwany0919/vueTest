<template>
  <div class="player">
    <div class="video-menu">
      비디오 서브 메뉴
      <button @click="singlePlay()">싱글플레이어</button>
      <button @click="multiPlay()">멀티플레이어</button>
    </div>
    <div class="video-body">
      <multi-video v-for="(data, idx) in videoData" :key="idx"
        ref="videoData"
        :videoId="data.id"
        :multiFlag="multiFlag"
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
        {id: "video1"},
        {id: "video2"},
        {id: "video3"},
        {id: "video4"}
      ],
      videoRefs: [],
      multiFlag: false
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
    },
    playVideo() {
      this.$refs.videoData[0].videoFlag = true;
      this.$refs.videoData[0].videoInit();
      window._player = this.$refs.videoData[0].player;
    },
    singlePlay() {
      for (var i=1; i<this.videoData.length; i++) {
        this.$refs.videoData[i].videoFlag = false;
        if (this.$refs.videoData[i].player) this.$refs.videoData[i].player.pause();
      }
      this.multiFlag = false;
    },
    multiPlay() {
      for (var i=1; i<this.videoData.length; i++) {
        this.$refs.videoData[i].videoFlag = true;
        this.$refs.videoData[i].videoInit();
      }
      this.multiFlag = true;
    }
  }
}
</script>

<style lang="scss">
  .player {
    display: flex;
    flex-flow: column wrap;
    text-align: left;
    
    .video-menu {
      width: 100%;
      height: 100%;
      padding: 30px 0;
    }

    .video-body {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
</style>>
<!--<style lang="less">
  .player {
    display: flex;
    flex-flow: column wrap;
    text-align: left;
    
    .video-menu {
      width: 100%;
      height: 100%;
      padding: 30px 0;
    }

    .video-body {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
</style>-->