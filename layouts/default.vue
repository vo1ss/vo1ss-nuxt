<template>
  <v-app>
    <!-- <Toolbar app /> -->
    <Header />
    <HeaderCategories />
    <Carousel />
    <v-content>
      <v-container fill-height justify-center lg-8>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app absolute>
      <span>Footer Section &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
// import Toolbar from '@/components/core/Toolbar'
import Header from '@/components//header/Header'
import HeaderCategories from '@/components/header/HeaderCategories'
import Carousel from '@/components/Carousel'

export default {
  components: {
    // Toolbar,
    Header,
    HeaderCategories,
    Carousel
  },
  mounted() {
    if (this.$store.state.articles.articles.length === 0) {
      this.$store.dispatch('articles/fetchRecentArticles')
      this.$store.dispatch('articles/fetchFeaturedArticles')
      this.$store.dispatch('articles/fetchStoriesArticles')
      this.$store.dispatch('articles/fetchPicksArticles')
      this.$store.dispatch('categories/fetchCategories')
    }
  }
}
</script>
