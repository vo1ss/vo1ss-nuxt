<template>
  <v-app>
    <!-- <Toolbar app /> -->
    <Header />
    <HeaderCategories />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
// import Toolbar from '@/components/core/Toolbar'
import Header from '@/components//header/Header'
import HeaderCategories from '@/components/header/HeaderCategories'

export default {
  components: {
    // Toolbar,
    Header,
    HeaderCategories
  }
}
</script>
