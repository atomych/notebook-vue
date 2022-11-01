<template>
  <section class="content">
    <header>
      <app-header :email="userEmail" />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <app-footer />
    </footer>
  </section>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;

  height: 100%;

  main {
    flex-grow: 1;
    padding: 10px;
  }
}
</style>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";

import { mapGetters } from "vuex";

export default {
  name: "HomeView",

  components: {
    AppHeader,
    AppFooter,
  },

  mounted() {
    if (this.userNotes.length) {
      this.$router.push({ name: "list" });
    } else {
      this.$router.push({ name: "empty" });
    }
  },

  computed: {
    ...mapGetters(["userId", "userEmail", "userNotes"]),
  },
};
</script>
