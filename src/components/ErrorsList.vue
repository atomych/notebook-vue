<template>
  <div class="list">
    <div class="list__item" v-for="(item, idx) in getErrors" :key="idx">
      <div class="message">
        {{ item.text }}
      </div>
      <button class="close" @click="remove(item.id)">
        <img
          src="../assets/icons/close.png"
          alt="close"
          title="Закрыть"
          width="10"
          height="10"
        />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 10px;
  right: 10px;

  z-index: 100;

  &__item {
    width: 300px;
    padding: 5px 0;
    margin-bottom: 10px;

    border: 2px solid rgb(255, 98, 0);
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 0 10px #000;

    transition: all 0.2s linear;

    position: relative;

    &:hover {
      background-color: rgb(255, 98, 0);

      .message {
        color: #fff;
      }

      .close {
        background-color: rgb(255, 98, 0);
        opacity: 1;
      }
    }

    .message {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 20px;
      font-weight: 500;

      transition: all 0.2s linear;
    }

    .close {
      position: absolute;
      top: 50%;
      right: 10px;

      transform: translateY(-50%);

      border: none;
      background-color: #fff;

      transition: all 0.2s linear;
      opacity: 0;

      cursor: pointer;
    }
  }
}
</style>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ErrorsList",

  computed: {
    ...mapGetters(["getErrors"]),
  },

  methods: {
    ...mapMutations(["removeErr"]),

    remove(item) {
      this.$store.commit("removeErr", item);
    },
  },
};
</script>
