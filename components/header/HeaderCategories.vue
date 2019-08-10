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
          link: '/category/who-we-are',
          title: 'Who We Are'
        },
        {
          link: '/category/work-and-careers',
          title: 'Work & Careers'
        },
        {
          link: '/category/academics-and-research',
          title: 'Academics & Research'
        },
        {
          link: '/category/stories-and-opinion',
          title: 'Stories & Opinion'
        },
        {
          link: '/category/arts-and-creative',
          title: 'Arts & Creative'
        },
        {
          link: '/share-your-vo1ss',
          title: 'Share Your Vo1ss'
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
