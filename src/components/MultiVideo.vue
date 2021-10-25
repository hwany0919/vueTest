<template>
  <div :class="['multiVideo', {multi:multiFlag}]" v-show="videoFlag">
    <div class="video-title">Video Play :: {{videoId}}</div>
    <video 
      :id="videoId"
      class="video-js vjs-default-skin"
      controls
      preload="auto"
      width="792"
      height="446"
      poster="~@/assets/img/player-default.jpg"
    />
  </div>
</template>

<script>
export default {
  props: {
    videoId: {type: String, required: true},
    multiFlag: {type: Boolean, default: false}
  },
  data() {
    return {
      player: null,
      videoFlag: false
    }
  },
  methods: {
    videoInit() {
      const videoSrc = "https://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/5764318566001/e00ea3b1-1ed0-4d34-beb5-098e587665d8/10s/master.m3u8?fastly_token=NjE3NjlmNWVfMjMxMTRiYTQ1M2QwZTlkMGQzNzM5MGQ1MmI4NjAwMTJlZTM4ZjgwYTBhOWIzNGZjMmRlMDRmMDExOTc4NTkyZQ%3D%3D";
      this.player = videojs(this.videoId, {
        sources: [
          { src: videoSrc }
        ],
        textTrackSettings: false
      });
      this.setBigButton(this.player);
      this.setVideoEvent(this.player);
    },
    setBigButton(player) {
      let bigPlayButton = document.createElement("div");
      bigPlayButton.setAttribute("class", "custom-big-play-button");
      bigPlayButton.addEventListener("click", () => { this.pause(player) });
      
      let bigPauseButton = document.createElement("div");
      bigPauseButton.setAttribute("class", "custom-big-pause-button");
      bigPauseButton.addEventListener("click", () => { this.play(player) });
      
      player.el_.appendChild(bigPlayButton);
      player.el_.appendChild(bigPauseButton);
    },
    play(player) {
      player.play();
    },
    pause(player) {
      player.pause();
    },
    setVideoEvent(player) {
      player.on("play", (e) => {
        console.log(player.id_, " /// play!!!");
      });

      player.on("pause", (e) => {
        console.log(player.id_, "pause!!!!!");
      })
    }
  },
  destroyed() {
    this.player.dispose();
  }
}
</script>

<style lang="less">
  .multiVideo {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    width: 49%;
    height: auto;
    // border: 1px solid #fff;
    margin: 10px;
    padding: 20px;

    .video-title {
      margin-bottom: 10px;
      font-size: 14px;
    }

    &.multi {
      width: 46%;
      margin: 5px;
      padding: 0;
    }
  }
</style>