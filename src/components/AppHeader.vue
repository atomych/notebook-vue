<template>
  <section class="wrapper">
    <div class="left">
      <h1>NoteBook</h1>
    </div>
    <div class="right">
      <div class="email">{{ email }}</div>
      <button class="logout">
        <img
          src="../assets/icons/logout.png"
          alt="Найти"
          title="Выйти"
          width="40"
          height="40"
        />
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  padding: 20px;
  background-color: rgb(255, 98, 0);

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left {
  h1 {
    font-weight: 700;
    font-size: 60px;
    color: #fff;

    text-shadow: 1px -1px 2px #000;
  }
}

.right {
  display: flex;
  align-items: center;

  .email {
    margin-right: 20px;
    color: #000;
    font-size: 24px;
    font-weight: 500;
  }

  .logout {
    background-color: transparent;
    border: none;

    cursor: pointer;
  }
}
</style>

<script>
export default {
  name: "AppHeader",

  props: {
    email: {
      type: String,
      required: true,
    },
  },
};
</script>
