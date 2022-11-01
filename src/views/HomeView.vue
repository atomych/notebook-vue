<template>
  <section class="content">
    <header>
      <app-header />
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

export default {
  name: "HomeView",

  components: {
    AppHeader,
    AppFooter,
  },

  mounted() {
    this.$router.push({ name: "empty" });
  },
};
</script>
