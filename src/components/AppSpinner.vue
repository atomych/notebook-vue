<template>
  <div class="back">
    <div class="spinner"></div>
  </div>
</template>

<style lang="scss" scoped>
.back {
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;

  background-color: rgba(255, 255, 255, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes spinner {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .spinner {
    width: 50px;
    height: 50px;

    border-top: 10px solid rgb(255, 98, 0);
    border-left: 10px solid rgb(255, 98, 0);
    border-bottom: 10px solid transparent;
    border-right: 10px solid transparent;

    border-radius: 50%;

    animation: spinner 1s linear infinite;
  }
}
</style>

<script>
export default {
  name: "AppSpinner",
};
</script>
