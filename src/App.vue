<template>
  <div class="container">
    <router-view />
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

body {
  height: 100vh;

  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
}

#app {
  height: 100%;
}

.container {
  width: 100%;
  max-width: 1400px;

  margin: 0 auto;

  height: 100%;
}
</style>
