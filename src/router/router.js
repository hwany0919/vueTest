import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "MAIN",
      component: () => import("@/views/Main"),
      children: [
        {
          path: "/",
          name: "HOME",
          component: () => import("@/views/Home")
        },
        {
          path: "/player",
          name: "PLAYER",
          component: () => import("@/views/Player")
        },
        {
          path: "/test",
          name: "TEST",
          component: () => import("@/components/HelloWorld")
        }
      ]
    }
  ]
})