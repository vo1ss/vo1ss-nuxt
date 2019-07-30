<template>
  <v-container pl-0 pr-0 fluid grid-list-lg>
    <v-layout wrap justify-start>
      <v-flex v-for="(article, index) of articles" :key="index" xs12 sm6 lg4>
        <articleCard :article="article" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import articleCard from './articleCard'
export default {
  name: 'ArticleCardsContainer',
  components: {
    articleCard
  },
  props: {
    articles: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
