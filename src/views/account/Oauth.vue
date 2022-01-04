<template>
  <div class="oauth">
    API 로그인 연동<br/>
    {{$route.query}}
  </div>
</template>

<script>
export default {
  created() {
    console.log("query :: ", this.$route.query);
    this.$router.replace("/");
  }
}
</script>

<style lang="less">
.oauth {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}

</style>