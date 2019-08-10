<template>
  <v-card flat>
    <v-img
      height="300px"
      :src="article.jetpack_featured_media_url"
    />
    <v-card-text>
      <span class="card__category card__header" v-html="category.toUpperCase()" />
      <span class="card__date card__header">
        {{ ' - ' + dateFilter.toUpperCase() }}
      </span>
      <h2 class="card__title" v-html="title" />
      <hr class="card__hr">
      <span class="card__excerpt" v-html="excerpt" />
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ArticleCard',
  props: {
    article: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    ...mapGetters({
      getCategoryName: 'categories/getCategoryName'
    }),
    dateFilter() {
      return this.$moment(this.article.date).format('LL')
    },
    category() {
      return this.getCategoryName(this.article.categories[0])
    },
    title() {
      return this.article.title.rendered
    },
    excerpt() {
      return `${this.article.excerpt.rendered.slice(0, 280)}...`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';
.card {
  width: 100%;
  &__header {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
  }
  &__category {
    color: $pink;
  }
  &__date {
    color: grey;
  }
  &__hr {
    text-align: center;
    width: 15%;
    height: 1px;
    margin: 5% auto;
    border: none;
    background-color: $pink;
  }
  &__title {
    font-size: 1.3rem;
    height: 100px;
    vertical-align: middle;
    margin-top: 2.5%;
  }
  &__excerpt {
    min-height: 200px;
    line-height: 2;
    text-align: justify;
  }
}
</style>
