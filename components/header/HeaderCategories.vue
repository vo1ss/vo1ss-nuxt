<template>
  <v-layout
    class="headerCategories__container"
    fill-height
    justify-center
    align-center
  >
    <nuxt-link
      v-for="(category, index) in capitalizedCategories"
      :key="index"
      :to="`/category/${category}`"
      class="headerCategories__tab"
    >
      {{ category }}
      <v-icon small>
        keyboard_arrow_down
      </v-icon>
    </nuxt-link>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        'Home',
        'About',
        'Creative',
        'Opinion',
        'Topic',
        'World',
        'Discussion'
      ]
    }
  },
  computed: {
    capitalizedCategories() {
      return this.categories.map((category) => {
        return category.toUpperCase()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';
.headerCategories {
  &__tab {
    font-size: 11px;
    letter-spacing: 0.99px;
    font-weight: 600;
    color: #161616;
    font-family: $primary_font;
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  &__tab + &__tab {
    margin-left: 2.5%;
  }
  &__container {
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    width: 100%;
    height: 50px;
  }
}
</style>
