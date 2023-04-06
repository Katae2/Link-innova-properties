<template>
  <section class="page-contents">
    <div class="banner">
      <img
        :src="app_url + '/images/banner/banner-news-and-activities.png'"
        class="d-block"
        alt="Banner News & Activities"
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
        <li>
          <router-link to="/News-and-activities"
            ><strong>ALL News and Activities</strong></router-link
          >
        </li>
        <li>
          <v-icon>mdi-chevron-right</v-icon>
        </li>
        <li>{{ post.subtitle }}</li>
      </ol>
    </div>
    <div class="py-5 mt-3 text-center">
      <h1>Current Projects</h1>
    </div>
    <div class="single-content">
      <v-container v-if="post.video != ''">
        <div class="video">
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="6">
              <div class="video-current-project">
                <embed width="100%" height="400" :src="post.video" type="" />
              </div>
            </v-col>
            <v-col cols="6" sm="12" md="12" lg="6" class="px-5">
              <h2>{{ post.title }}</h2>
              <h5>{{ post.subtitle }}</h5>
            </v-col>
          </v-row>
        </div>
        <v-divider class="my-2"></v-divider>
      </v-container>
      <div class="gallery">
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="2"
            v-for="(item, index) in items"
            :key="index"
            class="card-content"
          >
            <v-card class="mx-auto" height="auto" max-width="100%" v-bind="props">
              <div class="class-image">
                <v-img height="200" :src="app_url + item.img" cover />
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    id: {
      require: true,
      type: Number,
      default: false,
    },
  },
  data: () => ({
    items: [
      {
        id: 1,
        title: "LINK อาคารบูรณาการ ๗ ชั้น โรงพยาบาลหลังสวน , จังหวัดชุมพร , มกราคม ๒๕๖๔",
        subtitle: "TEAM BUILDING 2020",
        img: "/images/images-news-and-activities/img (1).jpg",
        video: "https://www.youtube.com/embed/4ML8VJI6Zo8",
      },
      {
        id: 2,
        title: "LINK อาคารบูรณาการ ๗ ชั้น โรงพยาบาลหลังสวน , จังหวัดชุมพร , มกราคม ๒๕๖๔",
        subtitle: "WE ARE THE HIGHLY EFFECTIVE TEAM",
        img: "/images/images-news-and-activities/img (2).jpg",
        video: "https://www.youtube.com/embed/4ML8VJI6Zo8",
      },
      {
        id: 3,
        title: "LINK อาคารบูรณาการ ๗ ชั้น โรงพยาบาลหลังสวน , จังหวัดชุมพร , มกราคม ๒๕๖๔",
        subtitle: "Cotto Futsal Cup ครั้งที่ 3",
        img: "/images/images-news-and-activities/img (3).jpg",
        video: "",
      },
      {
        id: 4,
        title: "LINK อาคารบูรณาการ ๗ ชั้น โรงพยาบาลหลังสวน , จังหวัดชุมพร , มกราคม ๒๕๖๔",
        subtitle: "Cotto Futsal Cup ครั้งที่ 2",
        img: "/images/images-news-and-activities/img (4).jpg",
        video: "https://www.youtube.com/embed/4ML8VJI6Zo8",
      },
      {
        id: 5,
        title: "LINK อาคารบูรณาการ ๗ ชั้น โรงพยาบาลหลังสวน , จังหวัดชุมพร , มกราคม ๒๕๖๔",
        subtitle: "งานประชุม  งานสังสรรค์ ปีใหม่ 2558",
        img: "/images/images-news-and-activities/img (5).jpg",
        video: "",
      },
      {
        id: 6,
        title: "LINK อาคารบูรณาการ ๗ ชั้น โรงพยาบาลหลังสวน , จังหวัดชุมพร , มกราคม ๒๕๖๔",
        subtitle: "Cotto Futsal Cup ครั้งที่ 1",
        img: "/images/images-news-and-activities/img (6).jpg",
        video: "https://www.youtube.com/embed/4ML8VJI6Zo8",
      },
      {
        id: 7,
        title: "LINK อาคารบูรณาการ ๗ ชั้น โรงพยาบาลหลังสวน , จังหวัดชุมพร , มกราคม ๒๕๖๔",
        subtitle: "ปฐมนิเทศพนักงานใหม่ วันที่12 ต.ค55",
        img: "/images/images-news-and-activities/img (7).jpg",
        video: "https://www.youtube.com/embed/4ML8VJI6Zo8",
      },
      {
        id: 8,
        title: "LINK อาคารบูรณาการ ๗ ชั้น โรงพยาบาลหลังสวน , จังหวัดชุมพร , มกราคม ๒๕๖๔",
        subtitle: "ต้อนรับบริษัท Tanglin สิงคโปร์ 9-12 สิงหา",
        img: "/images/images-news-and-activities/img (8).jpg",
        video: "https://www.youtube.com/embed/4ML8VJI6Zo8",
      },
      {
        id: 9,
        title: "LINK อาคารบูรณาการ ๗ ชั้น โรงพยาบาลหลังสวน , จังหวัดชุมพร , มกราคม ๒๕๖๔",
        subtitle: "งานเลี้ยงขอบคุณทีมงาน ปิดไซต์ โครงสร้างหลัก อาคารเรียนรวม มรภ.กพ",
        img: "/images/images-news-and-activities/img (9).jpg",
        video: "",
      },
      {
        id: 10,
        title: "LINK อาคารบูรณาการ ๗ ชั้น โรงพยาบาลหลังสวน , จังหวัดชุมพร , มกราคม ๒๕๖๔",
        subtitle: "ดูงานที่บริษัท ไมโครไบโอเทค",
        img: "/images/images-news-and-activities/img (10).jpg",
        video: "",
      },
    ],
  }),
  computed: {
    post() {
      return this.items.find((post) => post.id === Number(this.id));
    },
  },
};
</script>
