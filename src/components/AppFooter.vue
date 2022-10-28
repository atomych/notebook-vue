<template>
  <div class="wrapper">
    <div class="date">
      <span class="day-week">Понедельник, </span>
      <span class="day">18 </span>
      <span class="month">Октября </span>
      <span class="year">2022</span>
    </div>
    <div class="time">
      <span class="hours">18</span>
      :
      <span class="minutes">34</span>
      :
      <span class="seconds">08</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  padding: 20px;
  background-color: rgb(70, 70, 70);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-size: 16px;

  .date {
    margin-right: 15px;
  }
}
</style>

<script>
export default {
  name: "AppFooter",
};
</script>
