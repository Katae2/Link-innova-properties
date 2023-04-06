<template>
  <v-app class="position-relative">
    <!-- <v-app :theme="theme" class="position-relative"> -->
    <!-- <app-bar v-on:returnTheme="setTheme"></app-bar> -->
    <app-bar v-if="currentPage != 'Login-admin'"></app-bar>
    <ban-ner v-if="currentPage == 'Home'"></ban-ner>
    <!-- <side-bar></side-bar> -->
    <!-- <v-navigation-drawer color="grey-darken-2" permanent></v-navigation-drawer> -->

    <v-main class="main-container clearfix" id="con-tent">
      <router-view></router-view>
    </v-main>
    <foo-ter v-if="currentPage != 'Login-admin'"></foo-ter>
  </v-app>
</template>

<script>
export default {
  name: "appMain",
  data() {
    return {
      theme: "light",
    };
  },
  mounted() {
    return this.$route.name;
  },
  watch: {
    currentPage(route) {
      console.log(route);
    },
  },
  methods: {
    setTheme(data) {
      if (data) {
        this.theme = data;
      }
    },
  },
  computed: {
    currentPage() {
      return this.$route.name;
    },
  },
};
</script>
<style scoped>
#con-tent {
  padding: 0;
}
</style>
