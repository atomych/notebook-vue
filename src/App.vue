<template>
  <router-view />
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
export default {
  mounted() {
    this.$router.push({ name: "auth" });
  },
};
</script>
