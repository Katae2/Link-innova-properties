<template>
  <v-carousel
    hide-delimiters
    cycle
    class="banner"
    height="700"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="app_url + images[i]"
      cover
    >
      <v-card-title class="ma-5 bg-text" height="auto">
        <p>{{ title[i] }}</p>
        <p v-if="subtitle[i] != ''">{{ subtitle[i] }}</p>
      </v-card-title>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      title: [
        "Hilltania Condominium ฮิลทาเนีย คอนโดมิเนียม",
        "อาคารอำนวยการผู้ป่วยนอก และอุบัติเหตุฉุกเฉิน 11 ชั้น",
        "ท่าอากาศยานนานาชาติเบตง",
        "อาคารศูนย์บริการโรคหัวใจ มะเร็ง และวินิจฉัยรักษา",
      ],
      subtitle: [
        "ฮิลทาเนีย คอนโดมิเนียม",
        "โรงพยาบาลราชบุรี",
        "betong international airport",
        "โรงพยาบาลสระบุรี",
      ],
      slides: ["baner1", "baner2", "baner3", "baner4"],
      images: [
        "/images/banner/banner1.png",
        "/images/banner/banner2.png",
        "/images/banner/banner3.png",
        "/images/banner/banner4.png",
      ],
    };
  },
};
</script>
