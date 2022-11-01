<template>
  <section class="window">
    <form class="form" @keydown.enter.prevent="">
      <div class="form__item">
        <label for="email">Введите вашу почту:</label>
        <input name="email" type="text" class="input" v-model="email" />
      </div>
      <div class="form__item">
        <label for="pass">Придумайте пароль:</label>
        <input name="pass" type="password" class="input" v-model="pass" />
      </div>
      <div class="form__item">
        <label for="pass2">Повторите пароль:</label>
        <input name="pass2" type="password" class="input" v-model="pass2" />
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
import { mapActions, mapMutations } from "vuex";
import { createUser } from "../firebase/auth";

export default {
  name: "RegPage",

  data() {
    return {
      email: "",
      pass: "",
      pass2: "",
    };
  },

  computed: {
    isValidatedData() {
      if (this.pass.length >= 6 && this.pass == this.pass2) {
        return true;
      } else {
        if (this.pass != this.pass2) {
          this.$store.dispatch("regNewError", "Пароли не совпадают");
        }
        if (this.pass.length < 6) {
          this.$store.dispatch("regNewError", "Минимальная длина пароля - 6");
        }
        return false;
      }
    },
  },

  methods: {
    ...mapActions(["regNewError"]),
    ...mapMutations(["setValue"]),

    toEntryPage() {
      this.$router.push({ name: "entry" });
    },

    regNewUser() {
      if (!this.isValidatedData) return;

      this.$store.commit("setValue", true);

      createUser(this.email, this.pass)
        .then(() => {
          this.$router.push({ name: "entry" });
          this.$store.dispatch("regNewError", "Аккаунт успешно создан");
          this.$store.commit("setValue", false);
        })
        .catch((err) => {
          this.$store.dispatch("regNewError", err.code);
          this.$store.commit("setValue", false);
        });

      this.email = this.pass = this.pass2 = "";
    },
  },
};
</script>
