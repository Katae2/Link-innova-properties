<template>
  <section class="page-contents">
    <div class="banner">
      <img
        :src="app_url + '/images/banner/banner-contact-us.jpg'"
        class="d-block"
        alt="Banner Contact Us"
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
        <li>Contact us</li>
      </ol>
    </div>
    <div class="py-5 mt-3 text-center">
      <h1>Contact us</h1>
    </div>
    <v-container class="card-partner">
      <v-row>
        <v-col cols="3" class="px-6" v-for="(item, index) in items" :key="index">
          <a :href="item.url" class="text-decoration-none text-dark">
            <v-card class="mx-auto" max-width="100%" height="auto">
              <v-img class="align-end text-black text-animetion" :src="item.img" contain>
                <v-card-text class="mb-2 bg-text"> {{ item.content }} </v-card-text>
              </v-img>
            </v-card>
          </a>
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
        content: "บริษัท ปูนซิเมนต์ไทย จำกัด",
        img: "/images/images-our-partner/our-partner1.jpg",
        url: "https://web.cpac.co.th/",
      },
      {
        content: "บริษัท ผลิตภัณฑ์และวัตถุก่อสร้าง จำกัด",
        img: "/images/images-our-partner/our-partner2.jpg",
        url: "https://www.scgbuildingmaterials.com/",
      },
      {
        content: "บริษัท เชียงใหม่วีระวิศวการ จำกัด",
        img: "/images/images-our-partner/our-partner3.png",
        url: "https://www.weerawissawakarn.com/",
      },
      {
        content: "บริษัท ฮิตาชิ มหาชนจำกัด",
        img: "/images/images-our-partner/our-partner4.png",
        url: "https://www.yellowpages.co.th/",
      },
    ],
  }),
};
</script>
