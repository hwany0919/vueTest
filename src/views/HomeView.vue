<template>
  <div class="home">
    <!-- <ul class="test-ui">
      <li>Vue Test</li>
      <li>{{message}}</li>
      <li @click.stop.prevent="showLi = !showLi">Click!!</li>
      <li v-if="showLi">선택을 하면 보입니다.</li>
    </ul>
    <div class="second-line">
      <router-link :to="`/test`">화면 이동</router-link>
    </div>
    <div class="line">
      <span>CheckBox Test</span>
      <br>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <input type="checkbox" id="toms" value="Toms" v-model="checkedNames" />
      <label for="toms">Toms</label>
      <br>
      <span>{{ checkNames }}</span>
      <br><br>
      <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
      value check :: {{ toggle }}
    </div> -->
    <div class="btnDiv">
      <button @click="movePage">페이지 이동!!</button>
    </div>
  </div>
</template>

<script>
export default {
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
      window.open("https://www.spotvnow.co.kr", "_blank");
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
      justify-content: center;
      align-items: center;
      width: 100%;
      height: calc(100vh - 232px);

      > button {
        font-size: 24px;
        font-weight: bold;
        background-color: skyblue;
        cursor: pointer;
      }
    }
  }
</style>
