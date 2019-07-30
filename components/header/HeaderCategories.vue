<template>
  <v-layout
    class="headerCategories__container"
    fill-height
    justify-center
    align-center
  >
    <nuxt-link
      v-for="(category, index) in categories"
      :key="index"
      :to="category.link"
      class="headerCategories__tab"
    >
      {{ category.title.toUpperCase() }}
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
        {
          link: '/',
          title: 'home'
        },
        {
          link: '/category/about',
          title: 'about'
        },
        {
          link: '/category/creative',
          title: 'creative'
        },
        {
          link: '/category/opinion',
          title: 'opinion'
        },
        {
          link: '/category/topic',
          title: 'topic'
        },
        {
          link: '/category/world',
          title: 'world'
        },
        {
          link: '/category/discussion',
          title: 'discussion'
        }
      ]
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
    transition: all 0.3s;
    &:hover {
      color: $pink;
    }
  }
  &__tab + &__tab {
    margin-left: 2.5%;
  }
  &__container {
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    width: 100%;
    height: 50px;
    max-height: 50px;
  }
}
</style>
