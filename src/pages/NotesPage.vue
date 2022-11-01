<template>
  <div class="wrapper">
    <div class="control-bar">
      <div class="search">
        <input type="text" />
        <button>
          <img
            src="../assets/icons/search.png"
            alt="Найти"
            width="40"
            height="40"
            title="Найти"
          />
        </button>
      </div>
    </div>
    <ul class="list">
      <li
        class="item"
        v-for="(note, idx) in userNotes"
        :key="idx"
        @click="selectNote(idx)"
      >
        <span class="title">{{ note.title }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  .list {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 20px;
    list-style: none;

    .item {
      width: 100%;
      max-width: 800px;

      padding: 10px 20px;
      margin-bottom: 10px;

      border: 2px solid #000;
      border-radius: 15px;

      cursor: pointer;
      transition: all 0.2s linear;

      &:hover {
        box-shadow: 0 0 5px #000;
        background-color: rgb(255, 98, 0);
        color: #fff;
        border-color: rgb(255, 98, 0);
      }

      &:last-child {
        margin-bottom: 0;
      }

      .title {
        font-size: 20px;
        font-weight: 500;
      }
    }
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    input {
      font-size: 20px;
      font-weight: 500;

      border: 1px solid #000;
      border-radius: 5px;

      padding: 5px 10px;
      margin-right: 5px;

      width: 300px;
      transition: all 0.2s linear;

      &:focus {
        outline: none;
        box-shadow: 0 0 5px #000;
      }
    }

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
}
</style>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "NotesPage",

  computed: {
    ...mapGetters(["userNotes"]),
  },

  methods: {
    ...mapMutations(["setCurrentNote"]),

    selectNote(index) {
      this.$store.commit("setCurrentNote", index);
      this.$router.push({ name: "write" });
    },
  },
};
</script>
