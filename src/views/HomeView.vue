<template>
  <div class="home">
    <div class="btnDiv">
      <button @click="movePage">페이지 이동!!</button>
      <button @click="snsLogin">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48" class="abcRioButtonSvg">
          <g>
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
            <path fill="none" d="M0 0h48v48H0z"></path>
          </g>
        </svg>
        로그인
      </button>
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
      // window.open("https://www.spotvnow.co.kr");
      window.open("http://localhost:9090");
    },
    snsLogin() {
      const clientId = "357010407900-c7l74rdcutoo87g0lo6us5mpl9nnq65l.apps.googleusercontent.com"
      const scope = "https://www.googleapis.com/auth/userinfo.email"
      const redirectUri = "http://localhost:8080/oauth"
      const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`
      location.href = oauthUrl;
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
