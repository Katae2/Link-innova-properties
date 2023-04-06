<template>
  <section class="page-contents">
    <div class="banner">
      <img
        :src="app_url + '/images/banner/banner-news-and-activities.png'"
        class="d-block"
        alt="Banner Join us"
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
        <li>Join us</li>
      </ol>
    </div>
    <div class="py-5 mt-3 text-center">
      <h1>Join us</h1>
    </div>
    <v-container class="card-join-us">
      <v-row class="my-5">
        <v-col
          lg="3"
          md="4"
          sm="6"
          cols="12"
          class="card-content my-2"
          v-for="item in items"
          :key="item.id"
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
              <v-card-text class="txt-content">
                {{ item.content }}
              </v-card-text>
              <div class="class-image">
                <v-img :src="app_url + item.img" contain />
              </div>
              <v-card-text class="txt-content">
                <v-btn class="btn" :href="'/Details-join-us/' + item.id">
                  ดูรายละเอียด
                </v-btn>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <div class="bg-parallax">
      <v-parallax :src="app_url + '/images/images-background/back-graound-join-us1.jpg'">
        <div class="bg-text py-3">
          <h1>ติดต่อสมัครงาน</h1>
          <v-card-title class="ma-5 stype-card-text" height="auto">
            <h3><v-icon icon="mdi-email"></v-icon> hr@link.co.th</h3>
            <h3><v-icon icon="mdi-phone"></v-icon> 085-695-6505, 085-6956521</h3>
          </v-card-title>
        </div>
      </v-parallax>
    </div>
    <section class="single-content">
      <div class="gallery">
        <v-row>
          <v-col lg="3" md="3" sm="6" cols="12" class="pa-3">
            <div class="class-image">
              <v-img
                class="rounded-3"
                max-width="100%"
                height="270"
                :src="app_url + images[0]"
                cover
              />
            </div>
          </v-col>
          <v-col lg="3" md="3" sm="6" cols="12" class="pa-3">
            <div class="class-image">
              <v-img
                class="rounded-3"
                max-width="100%"
                height="270"
                :src="app_url + images[1]"
                cover
              />
            </div>
          </v-col>
          <v-col lg="3" md="3" sm="6" cols="12" class="pa-3">
            <div class="class-image">
              <v-img
                class="rounded-3"
                max-width="100%"
                height="270"
                :src="app_url + images[2]"
                cover
              />
            </div>
          </v-col>
          <v-col lg="3" md="3" sm="6" cols="12" class="pa-3">
            <div class="class-image">
              <v-img
                class="rounded-3"
                max-width="100%"
                height="270"
                :src="app_url + images[3]"
                cover
              />
            </div>
          </v-col>
          <v-col lg="6" md="12" sm="12" cols="12" class="pa-3">
            <div class="class-image">
              <v-img
                class="rounded-3"
                max-width="100%"
                height="270"
                :src="app_url + images[4]"
                cover
              />
            </div>
          </v-col>
          <v-col lg="3" md="6" sm="12" cols="12" class="pa-3">
            <div class="class-image">
              <v-img
                class="rounded-3"
                max-width="100%"
                height="270"
                :src="app_url + images[5]"
                cover
              />
            </div>
          </v-col>
          <v-col lg="3" md="6" sm="12" cols="12" class="pa-3">
            <div class="class-image">
              <v-img
                class="rounded-3"
                max-width="100%"
                height="270"
                :src="app_url + images[6]"
                cover
              />
            </div>
          </v-col>
          <v-col lg="3" md="6" sm="12" cols="12" class="pa-3">
            <div class="class-image">
              <v-img
                class="rounded-3"
                max-width="100%"
                height="270"
                :src="app_url + images[7]"
                cover
              />
            </div>
          </v-col>
          <v-col lg="3" md="6" sm="12" cols="12" class="pa-3">
            <div class="class-image">
              <v-img
                class="rounded-3"
                max-width="100%"
                height="270"
                :src="app_url + images[8]"
                cover
              />
            </div>
          </v-col>
          <v-col lg="6" md="12" sm="12" cols="12" class="pa-3">
            <div class="class-image">
              <v-img
                class="rounded-3"
                max-width="100%"
                height="270"
                :src="app_url + images[9]"
                cover
              />
            </div>
          </v-col>
        </v-row>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      {
        id: 1,
        content: "วิศกรโยธา",
        img: "/images/images-join-us/join-us1.png",
      },
      {
        id: 2,
        content: "วิศกรไฟฟ้า",
        img: "/images/images-join-us/join-us2.png",
      },
      {
        id: 3,
        content: "โฟร์แมนไฟฟ้า",
        img: "/images/images-join-us/join-us4.png",
      },
      {
        id: 4,
        content: "โฟร์แมน(เดินทางต่างจังหวัด)",
        img: "/images/images-join-us/join-us5.png",
      },
      {
        id: 5,
        content: "พนักงานขับรถ 6 ล้อ",
        img: "/images/images-join-us/join-us6.png",
      },
      {
        id: 6,
        content: "พนักงานขับรถ 4 ล้อ",
        img: "/images/images-join-us/join-us7.png",
      },
      {
        id: 7,
        content: "เจ้าหน้าที่ธุรการประจำสำนักงาน",
        img: "/images/images-join-us/join-us3.png",
      },
    ],
    images: [
      "/images/images-join-us/img (8).jpg",
      "/images/images-join-us/img (4).jpg",
      "/images/images-join-us/img (1).jpg",
      "/images/images-join-us/img (7).jpg",
      "/images/images-join-us/img (1).png",
      "/images/images-join-us/img (3).jpg",
      "/images/images-join-us/img (5).jpg",
      "/images/images-join-us/img (2).jpg",
      "/images/images-join-us/img (9).jpg",
      "/images/images-join-us/img (6).jpg",
    ],
  }),
};
</script>
