<template>
  <div class="wrapper">
    <div class="text">Нет созданных заметок</div>
    <button class="btn" @click="create()">Создать</button>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .text {
    margin-bottom: 15px;

    font-size: 30px;
    font-weight: 500;
  }

  .btn {
    padding: 10px 15px;
    background-color: transparent;

    border: 2px solid rgb(255, 98, 0);
    border-radius: 15px;

    font-size: 20px;
    font-weight: 500;

    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
      box-shadow: 0 0 10px #000;
      background-color: rgb(255, 98, 0);
      color: #fff;
    }
  }
}
</style>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "EmptyPage",

  computed: {
    ...mapGetters(["userNotes"]),
  },

  methods: {
    ...mapMutations(["addNote", "setCurrentNote"]),

    create() {
      this.$store.commit("addNote");

      const index = this.userNotes.length - 1;
      this.$store.commit("setCurrentNote", index);
      this.$router.push({ name: "write" });
    },
  },
};
</script>
