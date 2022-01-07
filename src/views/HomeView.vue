<template>
  <div class="home">
    <div class="btnDiv">
      <button @click="movePage">페이지 이동!!</button>
      <sns-login></sns-login>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    snsLogin: () => import("@/components/SnsLogin")
  },
  computed: {
    checkNames() {
      return (this.checkedNames.length > 0) ? this.checkedNames : "None";
    }
  },
  data() {
    return {
      message: "Vue 테스트 중입니다.",
      showLi: false,
      checkedNames: [],
      toggle: "no"
    }
  },
  methods: {
    movePage() {
      // window.open("https://www.spotvnow.co.kr");
      window.open("http://localhost:9090");
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

    .line {
      text-align: left;
      padding-left: 15px;
      line-height: 1.25;
      input[type=checkbox], label {
        cursor: pointer;
      }

      span {
        margin-left: 5px;
      }
    }

    .btnDiv {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: calc(100vh - 252px);

      > button {
        font-size: 24px;
        font-weight: bold;
        background-color: skyblue;
        cursor: pointer;
        margin: 10px auto;
      }
    }
  }
</style>
