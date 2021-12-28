import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import(/* webpackChunkName: "main" */"@/views/MainView"),
      children: [
        {
          path: "/",
          name: "HOME",
          component: () => import(/* webpackChunkName: "home" */"@/views/HomeView")
        },
        {
          path: "/player",
          name: "PLAYER",
          component: () => import(/* webpackChunkName: "player" */"@/views/PlayerView")
        },
        {
          path: "/test",
          name: "TEST",
          component: () => import(/* webpackChunkName: "sourceTest" */"@/views/CodeTestView"),
          children: [
            {
              path: "/test",
              name: "NEW ID",
              component: () => import(/* webpackChunkName: "test1" */"@/views/codes/NewIdRecommendView")
            },
            {
              path: "/test/keypad",
              name: "KEYPAD",
              component: () => import(/* webpackChunkName: "test2" */"@/views/codes/InputKeypadView")
            }
          ]
        }
      ]
    }
  ]
})