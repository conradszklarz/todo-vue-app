/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
       message: "TO DO LIST!",
      list: [
                {
                  Id: 1,
                  text: "Wash dishes!",
                  complete: true,
                },{
                  Id: 2,
                  text: "Clean bathroom!",
                  complete: false,
                },{
                  Id: 3,
                  text: "Wash floors!"
                  complete: true
                }
               ]
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});