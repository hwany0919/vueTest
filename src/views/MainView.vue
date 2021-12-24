<template>
  <div class="main">
    <Header class="header" />
    <router-view class="main-wrapper" />
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less">
  .main {
    display: flex;
    flex-flow: column wrap;

    .header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px solid #dddddd;
      padding: 10px 0 10px 20px;
      height: 65px;
    }

    .footer {
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 1px solid #dddddd;
      padding: 10px 0 10px 20px;
      height: 65px;
    }

    .main-wrapper {
      display: flex;
      flex-flow: column wrap;
      min-height: calc(100vh - 232px);
      padding: 30px;
    }
  }
</style>