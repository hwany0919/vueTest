<template>
  <div class="header">
    <img class="header-img" alt="Vue logo" src="@/assets/logo.png" @click="move(1)">
    <router-link v-for="(menu, idx) in headerMenus" :key="`${menu.name}_${idx}`" :to="menu.path" custom v-slot="{ navigate, isActive, isExactActive }">
      <div :class="['header-menu', {'home': menu.path == '/'}, isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
      @click="navigate" role="link">{{ menu.name }}</div>
    </router-link>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  computed: {
    headerMenus() {
      return _.get(this.$router.options.routes, 0).children
    }
  },
  methods: {
    move(index) {
      if (index === 1) this.$router.push("/")
    }
  }
}
</script>

<style lang="less">
  .header {
    .header-img {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 50px;
      height: 50px;
      cursor: pointer;
    }

    .header-menu {
      margin-left: 20px;
      font-size: 26px;
      color: #0000ff;
      font-weight: bold;
      cursor: pointer;
      
      &.home.router-link-active { color: #0000ff; }
      &.home.router-link-exact-active { color: #2affcc; }
      &.router-link-exact-active, &.router-link-active { color: #2affcc; }
    }

  }
</style>