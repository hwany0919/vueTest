<template>
  <div id="codeTest">
    <div class="codeTabs">
      <router-link class="codeMenu" v-for="(menu, idx) in codeMenus" :key="idx" :to="menu.path" tag="div">{{ menu.name }}</router-link>
    </div>
    <div class="codeBody">
      <router-view />
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  computed: {
   codeMenus() {
      return _.get(_.get(this.$router.options.routes, 0).children, 2).children;
    }
  }
}
</script>

<style lang="less">
  #codeTest {
    text-align: left;

    .codeTabs {
      display: flex;
      border-bottom: 1px solid #fff;
      padding-bottom: 20px;
      margin-bottom: 10px;
      font-size: 20px;
      color: #c5c5c5;

      .codeMenu {
        margin-left: 15px;
        cursor: pointer;

        &.router-link-exact-active {
          color: #ff23a3;
          font-weight: bold;
        }
      }
    }

    .codeBody {
      .question {
        margin-left: 15px;
        margin-bottom: 20px;
  
        .word_bold {
          font-weight: bold;
          font-size: 20px;
          color: #63fff4;
        }
      }
  
      .answer {
        margin: 5px 0px 0 15px;
      }
    }
  }
</style>