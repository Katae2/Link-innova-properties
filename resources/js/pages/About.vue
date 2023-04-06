<template>
    <section>
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1 class="text-center">About page</h1>
          </v-col>
          <v-col cols="3">
            <v-card class="mx-auto" width="400" prepend-icon="mdi-home" :image="app_url+'/images/bg.jpg'">
              <template v-slot:title>
                Garena 
              </template>
              <v-card-text>
                This is content
              </v-card-text>
              <v-btn class="ma-2 bg_btn">
                Cancel
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </template>
  <script>
    export default {
      data() {
        return {};
      },
      created() {},
      watch: {},
      methods: {},
      computed: {},
    };
  </script>