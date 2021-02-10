<template>
  <div class="home">
    <ul class="test-ui">
      <li>Vue Test</li>
      <li>{{message}}</li>
      <li @click="liClick">Click!!</li>
      <li v-if="showLi">선택을 하면 보입니다.</li>
    </ul>
    <div class="second-line">
      <router-link :to="`/test`">화면 이동</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Vue 테스트 중입니다.",
      showLi: false
    }
  },
  methods: {
    liClick() {
      this.showLi = !this.showLi
    }
  }
}
</script>

<style lang="less">
  .home {
    .test-ui {
      text-align: left;
      line-height: 1.5;
      li {
        font-size: 20px;
      
        &:nth-child(3) {
          cursor: pointer;
        }
      }
    }

    .second-line {
      width: 100px;
      height: 50px;
    }
  }
</style>
