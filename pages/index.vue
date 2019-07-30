<template>
  <v-layout class="landing" fill-height column text-xs-center>
    <!-- HERO SECTION -->
    <v-flex class="landing__section">
      <v-carousel hide-delimiters :cycle="false" class="landing__section__carousel">
        <v-carousel-item
          v-for="(item, index) of recent"
          :key="index"
          :src="item.jetpack_featured_media_url"
        />
      </v-carousel>
    </v-flex>
    <!-- SECTIONS -->
    <v-flex v-for="(section, index) of sections" :key="index" class="landing__section">
      <div class="container__header">
        <span class="container__header__separator" />
        <h1 class="container__header__title">{{ section.title }}</h1>
        <span class="container__header__separator" />
      </div>
      <articleCardsContainer :articles="section.articles" />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import articleCardsContainer from '@/components/article/articleCardsContainer'
export default {
  name: 'LandingPage',
  components: {
    articleCardsContainer
  },
  data() {
    return {
      sectionTitles: [
        {
          title: 'LATEST POSTS',
          id: 'recent'
        }, 
        {
          title: 'FEATURES',
          id: 'featured'
        }, 
        {
          title: 'DISCUSSION',
          id: 'discussion'
        }, 
        {
          title: "EDITOR'S PICKS",
          id: 'picks'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      recent: 'articles/recent'
    }),
    sections() {
      return this.sectionTitles.map(section => {
        return {
          title: section.title,
          articles: this[section.id]
        }
      })
    }
  },
  mounted() {
    this.$store.dispatch('articles/fetchArticles')
    this.$store.dispatch('categories/fetchCategories')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';
.landing {
  font-family: $primary_font;
  width: 100%;
  max-width: 1170px;
  &__section {
    margin-top: 3.5%;
    &__carousel {
      box-shadow: none;
    }
  }
}
.container {
  &__header {
    width: 100%;
    display: flex;
    margin: 2.5% 0;
    &__title {
      flex: 0 1 auto;
      font-size: 0.85rem;
      padding: 0 3.5%;
    }
    &__separator {
      position: relative;
      flex: 1 1 auto;
      padding: 0 24px;
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        bottom: 50%;
        left: 0;
        border-top: 1.5px solid #ebebeb;
      }
    }
  }
}
</style>
