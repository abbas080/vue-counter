import { createApp } from 'vue'
// import Vue from 'Vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
// import router from './router'
// import Counter_Page from './components/Counter_Page.vue'
// import PageNotFound from './components/PageNotFound.vue'
import store from './store'
const app = createApp(App)
App.use(store)
// Counter_Page.use(store)
// Vue.use(VueRouter)
app.mount('#app')

// const routes = [
//     {
//       path: "/",
//       component: Counter_Page
//     },
//     {
//       path: "/pageNotFound",
//       alias: "*",
//       component: PageNotFound
//     }
//   ];
  
//   const router = new VueRouter({
//     routes,
//     mode: "history"
//   });

//   new Vue({
//     router,
//     render: h => h(App)
//   }).$mount("#app");