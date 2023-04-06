<template>
  <section class="page-contents">
    <div class="banner">
      <img
        :src="app_url + '/images/banner/banner-completed-projects.jpg'"
        class="d-block"
        alt="Banner Completed Projects"
      />
    </div>
    <div class="header-page">
      <ol>
        <li>
          <router-link to="/"><strong>Home</strong></router-link>
        </li>
        <li>
          <v-icon>mdi-chevron-right</v-icon>
        </li>
        <li>All Completed Projects</li>
      </ol>
    </div>
    <div class="py-5 mt-3 text-center">
      <h1>Completed Projects</h1>
    </div>
    <v-container class="card-articlr-projects">
      <div class="text-center">
        <v-pagination v-model="page" :length="20" :total-visible="7"></v-pagination>
      </div>
      <v-row class="my-5">
        <v-col cols="3" class="pa-3" v-for="item in items" :key="item.id">
          <router-link
            :to="{ params: { id: item.id }, name: 'Single-completed-project' }"
          >
            <v-card class="mx-auto card-content" max-width="100%">
              <v-img
                class="align-end text-black text-animetion"
                :src="item.img"
                height="400px"
                cover
              >
                <v-card-text class="ma-5 bg-text"> {{ item.content }} </v-card-text>
              </v-img>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-pagination :length="6"></v-pagination>
      </div>
    </v-container>
  </section>
</template>
<script>
export default {
  data: () => ({
    page: 1,
    selectedItem: 0,
    items: [
      {
        id: 1,
        content:
          "โครงการก่อสร้างอาคารอำนวยการผู้ป่วยนอก และอุบัติเหตุฉุกเฉิน 11 ชั้น โรงพยาบาลราชบุรี",
        img: "/images/images-completed-project/img (1).png",
      },
      {
        id: 2,
        content: "โครงการก่อสร้างท่าอากาศยานเบตง",
        img: "/images/images-completed-project/img (2).png",
      },
      {
        id: 3,
        content: "โครงก่อสร้างคอนโด Hiltania",
        img: "/images/images-completed-project/img (3).png",
      },
      {
        id: 4,
        content: "โครงก่อสร้างบ้านพักศาลปกครองเชียงใหม่",
        img: "/images/images-completed-project/img (4).png",
      },
      {
        id: 5,
        content: "โครงก่อสร้างอาคารเรียนและปฏิบัติการรวม คณะมนุษยศาสตร์",
        img: "/images/images-completed-project/img (5).png",
      },
      {
        id: 6,
        content: "โครงก่อสร้างอาคารที่ทำการศาล จังหวัดกระบี่",
        img: "/images/images-completed-project/img (6).png",
      },
    ],
  }),
};
</script>
