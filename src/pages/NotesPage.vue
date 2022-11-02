<template>
  <div class="wrapper">
    <div class="control-bar">
      <button class="btn" @click="addNote()">Добавить заметку</button>
      <!-- <div class="search">
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
      </div> -->
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
        box-shadow: 0 0 10px #000;
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

  .control-bar {
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    .btn {
      margin-right: 30px;
      padding: 5px 10px;

      border: 2px solid rgb(255, 98, 0);
      border-radius: 10px;
      background-color: #fff;

      font-size: 20px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s linear;

      &:hover {
        background-color: rgb(255, 98, 0);
        color: #fff;
        box-shadow: 0 0 10px #000;
      }
    }

    // .search {
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;

    //   input {
    //     font-size: 20px;
    //     font-weight: 500;

    //     border: 1px solid #000;
    //     border-radius: 5px;

    //     padding: 5px 10px;
    //     margin-right: 5px;

    //     width: 300px;
    //     transition: all 0.2s linear;

    //     &:focus {
    //       outline: none;
    //       box-shadow: 0 0 5px #000;
    //     }
    //   }

    //   button {
    //     background-color: transparent;
    //     border: none;
    //     cursor: pointer;
    //   }
    // }
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
    ...mapMutations(["setCurrentNote", "addNote"]),

    selectNote(index) {
      this.$store.commit("setCurrentNote", index);
      this.$router.push({ name: "write" });
    },

    addNote() {
      this.$store.commit("addNote");

      const index = this.userNotes.length - 1;
      this.selectNote(index);
    },
  },
};
</script>
