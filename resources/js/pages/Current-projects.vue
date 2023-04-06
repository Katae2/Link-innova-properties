<template>
  <section class="page-contents">
    <div class="banner">
      <img
        :src="app_url + '/images/banner/banner-current-projects.jpg'"
        class="d-block"
        alt="Banner Current Projects"
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
        <li>All Current Projects</li>
      </ol>
    </div>
    <div class="py-5 mt-3 text-center">
      <h1>Current Projects</h1>
    </div>
    <v-container class="card-articlr-projects">
      <v-row>
        <v-col cols="3" class="pa-3" v-for="item in items" :key="item.id">
          <router-link :to="{ params: { id: item.id }, name: 'Single-current-project' }">
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
    </v-container>
  </section>
</template>
<script>
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      {
        id: 1,
        content: "โครงการก่อสร้างอาคารสำนักงาน ธนาคารออมสินสาขาสุโขทัย",
        img: "/images/images-current-project/img (3).jpg",
      },
      {
        id: 2,
        content: "โครงการก่อสร้างอาคารเรียนรวม และเอนกประสงค์ แม่สอด ",
        img: "/images/images-current-project/img (3).png",
      },
      {
        id: 3,
        content: "โครงการก่อสร้างอาคารผู้โดยสารขาออกท่าอากาศยานนานาชาติ จ.ภูเก็ต",
        img: "/images/images-current-project/img (1).jpg",
      },
      {
        id: 4,
        content: "โครงการก่อสร้างอาคารนวัตกรรมศึกษา",
        img: "/images/images-current-project/img (2).png",
      },
      {
        id: 5,
        content: "โครงการก่อสร้างสำนักงานคดีปกครองเชียงใหม่",
        img: "/images/images-current-project/img (1).png",
      },
      {
        id: 6,
        content: "โครงการก่อสร้างอาคารสำนักงานคุมประพฤติ พร้อมสิ่งก่อสร้างประกอบ",
        img: "/images/images-current-project/img (2).jpg",
      },
      {
        id: 7,
        content: "โครงการก่อสร้างโรงเรียนหนองอาบช้าง",
        img: "/images/images-current-project/img (4).png",
      },
      {
        id: 8,
        content: "โครงการก่อสร้างอาคารพัฒนาสมองร่างกาย และพฤติกรรมของเด็กด้อยโอกาส",
        img: "/images/images-current-project/img (1).png",
      },
    ],
  }),
};
</script>
