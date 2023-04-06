<template>
  <section id="home">
    <v-container>
      <v-row class="my-5">
        <v-col
          md="4"
          sm="6"
          cols="12"
          v-for="(item, index) in items"
          :key="index"
          class="card-content"
        >
          <v-hover v-slot="{ isHovering, props }" open-delay="100%">
            <v-card
              :elevation="isHovering ? 6 : 1"
              :class="{ 'on-hover': isHovering }"
              class="mx-auto"
              height="100%"
              max-width="100%"
              v-bind="props"
            >
              <div class="class-image">
                <router-link to="#"
                  ><v-img height="300" :src="app_url + item.img" cover
                /></router-link>
              </div>
              <v-card-text class="txt-content">
                {{ item.content }}
              </v-card-text>
              <div class="style-btn">
                <v-btn class="btn" :href="item.path"> see more </v-btn>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <v-main class="txt-anemetion">
      <h3>
        LINK INNOVA PROPERTIES COMPANY LIMITED 50 หมู่ 2 ตำบลตลาดขวัญ อำเภอดอยสะเก็ต
        จังหวัดเชียงใหม่ 50220 โทรศัพท์ : 053-039191 เบอร์มือถือ : 085-6956505
      </h3>
    </v-main>
  </section>
</template>
<script>
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      {
        content: "News and activities",
        img: "/images/img (1).jpg",
        path: "/News-and-activities",
      },
      {
        content: "Current projects",
        img: "/images/img (1).png",
        path: "/Current-projects",
      },
      {
        content: "Completed projects",
        img: "/images/img (2).jpg",
        path: "/Completed-projects",
      },
    ],
  }),
};
</script>
