<template>
  <section class="window">
    <div class="logo">
      <h1>NoteBook</h1>
    </div>
    <form class="form" @keydown.enter.prevent="">
      <div class="form__item">
        <label for="email">Почта:</label>
        <input name="email" type="email" class="input" v-model="email" />
      </div>
      <div class="form__item">
        <label for="pass">Пароль:</label>
        <input
          name="pass"
          type="password"
          class="input"
          @keydown.enter.prevent="checkAuth()"
          v-model="password"
        />
      </div>
      <div class="btns">
        <input
          type="submit"
          class="btn"
          value="Войти"
          @click.prevent="checkAuth()"
          @keydown.enter.prevent="checkAuth()"
        />
        <button
          class="btn"
          @click.prevent="toRegPage()"
          @keydown.enter.prevent="toRegPage()"
        >
          Зарегистрироваться
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

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .logo {
    margin-bottom: 30px;

    h1 {
      font-size: 60px;
      font-weight: 700;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__item {
      display: flex;
      flex-direction: column;

      margin-bottom: 25px;

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

        cursor: pointer;
        transition: all 0.2s linear;

        margin-bottom: 15px;

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
  }
}
</style>

<script>
import { mapActions, mapMutations } from "vuex";
import { signIn } from "../firebase/auth";

export default {
  name: "EntryPage",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  computed: {
    isValidatedData() {
      if (this.email && this.password) {
        return true;
      } else {
        if (this.email == "") {
          this.$store.dispatch("regNewError", "Вы не ввели почту");
        }
        if (this.password == "") {
          this.$store.dispatch("regNewError", "Вы не ввели пароль");
        }
        return false;
      }
    },
  },

  methods: {
    ...mapActions(["regNewError"]),
    ...mapMutations(["setValue"]),

    toRegPage() {
      this.$router.push({ name: "reg" });
    },
    checkAuth() {
      if (!this.isValidatedData) return;

      this.$store.commit("setValue", true);

      signIn(this.email, this.password)
        .then((userCredential) => {
          console.log(userCredential);
          this.$store.commit("setValue", false);
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          this.$store.dispatch("regNewError", err.code);
        });

      this.email = this.password = "";
    },
  },
};
</script>
