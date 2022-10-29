<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
export default {
  name: "AuthView",

  mounted() {
    this.$router.push({ name: "entry" });
  },
};
</script>
