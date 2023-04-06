<template>
  <v-img
    class="login-admin"
    max-height="100%"
    max-width="100%"
    :src="app_url + bg_image[0]"
    contain
  >
    <div class="bg-color">
      <v-card class="position-card" max-width="40%" max-height="50%">
        <v-row>
          <v-col md="6" sm="12" xs="12">
            <v-img :src="app_url + bg_image[1]" />
          </v-col>
          <v-col md="6" sm="12" xs="12">
            <v-form v-model="form" @submit.prevent="onSubmit">
              <v-text-field
                v-model="email"
                :readonly="loading"
                :rules="[required]"
                class="mb-2"
                clearable
                label="Email"
              >
              </v-text-field>

              <v-text-field
                v-model="password"
                :readonly="loading"
                :rules="[required]"
                clearable
                label="Password"
                placeholder="Enter your password"
              ></v-text-field>
              <v-btn
                :disabled="!form"
                :loading="loading"
                block
                color="success"
                size="large"
                type="submit"
                variant="elevated"
              >
                Sign In
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-img>
</template>

<script>
export default {
  data: () => ({
    form: false,
    email: null,
    password: null,
    loading: false,
    bg_image: [
      "/images/banner/banner3.png",
      "/images/images-current-project/img (2).jpg",
    ],
  }),
  methods: {
    onSubmit() {
      if (!this.form) return;
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
};
</script>
