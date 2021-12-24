import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import(/* webpackChunkName: "MAIN" */"@/views/MainView"),
      children: [
        {
          path: "/",
          name: "HOME",
          component: () => import(/* webpackChunkName: "HOME" */"@/views/HomeView")
        },
        {
          path: "/player",
          name: "PLAYER",
          component: () => import(/* webpackChunkName: "PLAYER" */"@/views/PlayerView")
        },
        {
          path: "/test",
          name: "TEST",
          component: () => import("@/views/CodeTestView"),
          children: [
            {
              path: "/test",
              name: "NEW ID",
              component: () => import("@/views/codes/NewIdRecommendView")
            },
            {
              path: "/test/keypad",
              name: "KEYPAD",
              component: () => import("@/views/codes/InputKeypadView")
            }
          ]
        }
      ]
    }
  ]
})