<template>
  <!-- <v-app-bar color="grey-lighten-2" height="100"> -->
  <v-app-bar height="100" id="app-bar">
    <router-link to="/"
      ><img :src="app_url + '/images/logo.png'" alt="Logo Link innova" class="style-logo"
    /></router-link>
    <v-spacer></v-spacer>
    <div class="row pe-5">
      <div class="col-md-12 icon-login mb-2">
        <ul>
          <li>
            <router-link to="/Login-admin">
              <i class="fa-solid fa-screwdriver-wrench"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/Login-admin">
              <i class="fa-solid fa-key"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/Login-admin">
              <i class="fa-solid fa-envelope"></i>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-md-12 menu-bar text-uppercase">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link
              to="/News-and-activities"
              :class="$route.name == 'News-and-activities-read' ? 'text-red' : ''"
              >News & activities</router-link
            >
          </li>
          <li>
            <v-menu open-on-hover>
              <template v-slot:activator="{ props: menu }">
                <span
                  v-bind="mergeProps(menu, tooltip)"
                  :class="
                    $route.name == 'Current-projects' ||
                    $route.name == 'Completed-projects' ||
                    $route.name == 'Single-current-project' ||
                    $route.name == 'Single-completed-project'
                      ? 'text-red'
                      : ''
                  "
                  >Our project <v-icon class="mb-1">mdi-chevron-down</v-icon></span
                >
              </template>
              <v-list id="dropdown-munu" class="text-uppercase p-0">
                <v-list-item>
                  <router-link to="/Current-projects"
                    ><v-icon class="mb-1">mdi-chevron-right</v-icon> Current
                    Projects</router-link
                  >
                </v-list-item>
                <hr class="m-2" />
                <v-list-item>
                  <router-link to="/Completed-projects"
                    ><v-icon class="mb-1">mdi-chevron-right</v-icon> Completed
                    projects</router-link
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </li>
          <li>
            <router-link to="/Our-partner">Our partner</router-link>
          </li>
          <li>
            <router-link
              to="/Join-us"
              :class="$route.name == 'Details-join-us' ? 'text-red' : ''"
              >Join us</router-link
            >
          </li>
          <li>
            <router-link to="/Contact-us">Contact us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </v-app-bar>
</template>
<script>
import { mergeProps } from "vue";

export default {
  data: () => ({}),
  methods: {
    mergeProps,
  },
};
</script>
<script setup>
window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});
</script>
<style scoped></style>
