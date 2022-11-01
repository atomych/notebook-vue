<template>
  <router-view />
  <errors-list />
  <app-spinner v-if="showSpinner" />
</template>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
}

body {
  height: 100vh;
  font-size: 18px;
}

#app {
  height: 100%;
}
</style>

<script>
import ErrorsList from "./components/ErrorsList.vue";
import AppSpinner from "./components/AppSpinner.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ErrorsList,
    AppSpinner,
  },

  mounted() {
    this.$router.push({ name: "auth" });
  },

  computed: {
    ...mapGetters(["showSpinner"]),
  },
};
</script>
