<template>
  <div id="app">
    <v-main-wrapper />
  </div>
</template>

<script>
import vMainWrapper from "./components/v-main-wrapper";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    vMainWrapper
  },
  computed: {
    ...mapGetters(["IS_MOBILE", "IS_DESKTOP"])
  },
  methods: {
    ...mapActions(["SET_MOBILE", "SET_DESKTOP"])
  },
  mounted() {
    let vm = this;
    window.addEventListener("resize", function() {
      if (window.innerWidth > 767) {
        vm.SET_DESKTOP();
        console.log("Desktop", vm.IS_DESKTOP);
      } else {
        vm.SET_MOBILE();
        console.log("Mobile", vm.IS_MOBILE);
      }
    });
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
