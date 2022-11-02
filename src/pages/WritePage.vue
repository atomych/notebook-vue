<template>
  <div class="wrapper">
    <div class="title">
      <input
        type="text"
        placeholder="Напишите заголовок здесь..."
        v-model="title"
      />
    </div>
    <div class="text">
      <textarea placeholder="Напишите текст здесь..." v-model="text"></textarea>
    </div>
    <div class="control-bar">
      <button class="btn" @click="save()">Сохранить</button>
      <button class="btn" @click="del()">Удалить</button>
      <button class="btn" @click="clear()">Очистить</button>
      <button class="btn" @click="back()">Назад</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  max-width: 1400px;

  height: 100%;

  display: flex;
  flex-direction: column;

  margin: 0 auto;

  background-color: rgb(144, 144, 144);
  border-radius: 10px;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px;

    input {
      font-size: 24px;
      font-weight: 500;
      text-align: center;

      border: none;
      border-radius: 10px;

      width: 100%;
      padding: 10px 15px;

      transition: all 0.2s linear;

      &:focus {
        outline: none;
        box-shadow: 0 0 10px #000;
      }
    }
  }

  .text {
    flex-grow: 1;

    padding: 0 20px;

    textarea {
      width: 100%;
      height: 100%;

      resize: none;

      font-size: 20px;
      font-weight: 400;

      padding: 10px;

      border: none;
      transition: all 0.2s linear;
      border-radius: 10px;

      &:focus {
        box-shadow: 0 0 10px #000;
        outline: none;
      }
    }
  }

  .control-bar {
    padding: 10px 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    .btn {
      font-size: 18px;
      font-weight: 500;

      border: none;
      background-color: transparent;

      margin-right: 20px;

      cursor: pointer;

      transition: all 0.2s linear;

      &:last-child {
        margin-right: 0;
      }

      &:hover,
      &:focus {
        text-shadow: 0 0 5px #fff;
        outline: none;
      }
    }
  }
}
</style>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "WritePage",

  data() {
    return {
      title: "",
      text: "",
    };
  },

  mounted() {
    this.title = this.userCurrentNote.title;
    this.text = this.userCurrentNote.text;
  },

  computed: {
    ...mapGetters(["userCurrentNote", "userCurrentNoteIndex", "userNotes"]),
  },

  methods: {
    ...mapActions(["regNewError", "changeUserNotes"]),
    ...mapMutations(["setCurrentNote", "changeNote", "removeNote"]),

    save() {
      if (this.title == "") {
        this.$store.dispatch("regNewError", "Введите заголовок");
        return;
      }

      const params = {
        title: this.title,
        text: this.text,
      };

      this.$store.commit("changeNote", params);
      this.$store.dispatch("changeUserNotes");
      this.back();
      this.$store.dispatch("regNewError", "Заметка сохранена");
    },
    del() {
      this.$store.commit("removeNote", this.userCurrentNoteIndex);
      this.$store.dispatch("regNewError", "Заметка удалена");
      this.$store.commit("setCurrentNote", null);
      this.$store.dispatch("changeUserNotes");

      if (this.userNotes.length == 0) {
        this.$router.push({ name: "empty" });
      } else {
        this.$router.push({ name: "list" });
      }
    },
    clear() {
      this.title = "";
      this.text = "";
    },
    back() {
      if (this.title == "" && this.text == "") {
        this.$store.commit("removeNote", this.userCurrentNoteIndex);
      }
      this.$store.commit("setCurrentNote", null);

      if (this.userNotes.length == 0) {
        this.$router.push({ name: "empty" });
      } else {
        this.$router.push({ name: "list" });
      }
    },
  },
};
</script>
