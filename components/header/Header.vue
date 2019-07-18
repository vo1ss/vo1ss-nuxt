<template>
  <v-layout class="header__container" fill-height justify-center align-center>
    <h1 class="header">
      VO1SS
    </h1>
  </v-layout>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';
.header {
  width: 100%;
  max-width: 1170px;
  text-align: center;
  font-family: $primary_font;
  color: #2e2e2e;
  font-weight: 400;
  font-size: 70px;
  letter-spacing: -3px;
  &__container {
    width: 100%;
    padding: 55px 0;
    max-height: 180px;
  }
}
</style>
