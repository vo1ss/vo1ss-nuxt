<template>
  <v-carousel hide-delimiters :cycle="false" class="carousel">
    <v-carousel-item
      v-for="(item, index) of carouselData"
      :key="index"
      :src="item.jetpack_featured_media_url"
    >
      <v-layout
        align-center
        fill-height
        justify-center
        class="carousel__wrapper"
      >
        <span class="carousel__title" v-html="item.title.rendered" />
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CarouselComponent',
  computed: {
    ...mapGetters({
      articles: 'articles/getArticles'
    }),
    carouselData() {
      const res = this.articles('recent')
      return res === undefined ? [] : res.data
    }
  }
}
</script>

<style lang='scss' scoped>
.carousel {
  margin-top: 3.5%;
  box-shadow: none;
  &__wrapper {
    background: rgba(0, 0, 0, 0.5);
  }
  &__title {
    font-size: 1.6rem;
    font-weight: 700;
    color: white;
  }
}
</style>
