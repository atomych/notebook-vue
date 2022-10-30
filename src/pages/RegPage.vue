<template>
  <section class="window">
    <form class="form" @keydown.enter.prevent="">
      <div class="form__item">
        <label for="email">Введите вашу почту:</label>
        <input name="email" type="text" class="input" />
      </div>
      <div class="form__item">
        <label for="pass">Придумайте пароль:</label>
        <input name="pass" type="password" class="input" />
      </div>
      <div class="form__item">
        <label for="pass2">Повторите пароль:</label>
        <input name="pass2" type="password" class="input" />
      </div>
      <div class="btns">
        <input
          type="submit"
          class="btn"
          value="Зарегистрироваться"
          @click.prevent="regNewUser()"
          @keydown.enter.prevent="regNewUser()"
        />
        <button
          class="btn"
          @click.prevent="toEntryPage()"
          @keydown.enter.prevent="toEntryPage()"
        >
          Назад
        </button>
      </div>
    </form>

    <errors-list :errors="errors" />
  </section>
</template>

<style lang="scss" scoped>
.window {
  width: 100%;
  max-width: 600px;

  height: 100%;
  max-height: 600px;

  padding: 20px;

  border: 3px solid rgb(255, 98, 0);
  border-radius: 10px;
}

.form {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__item {
    display: flex;
    flex-direction: column;

    margin-bottom: 20px;

    label {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    .input {
      padding: 5px 10px;
      font-size: 20px;

      border: 1px solid rgb(255, 98, 0);
      border-radius: 10px;
      background-color: #fff;

      transition: all 0.2s linear;

      &:focus {
        outline: none;
        background-color: rgb(255, 98, 0);
        color: #fff;
      }
    }
  }
}

.btns {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;

  .btn {
    background-color: #fff;
    border: 2px solid rgb(255, 98, 0);
    border-radius: 10px;

    font-size: 20px;
    font-weight: 500;

    padding: 5px 20px;
    margin-bottom: 15px;

    cursor: pointer;
    transition: all 0.2s linear;

    &:focus,
    &:hover {
      outline: none;
      background-color: rgb(255, 98, 0);
      color: #fff;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

<script>
import ErrorsList from "../components/ErrorsList.vue";

export default {
  name: "RegPage",

  components: {
    ErrorsList,
  },

  data() {
    return {
      errors: [],
    };
  },

  methods: {
    toEntryPage() {
      this.$router.push({ name: "entry" });
    },
    regNewUser() {
      this.errors = [...this.errors, "Регистрация не доступна"];
    },
  },
};
</script>
