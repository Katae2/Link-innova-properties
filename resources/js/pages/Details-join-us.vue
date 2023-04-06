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
        <li>
          <router-link to="/Join-us"><strong>Join us</strong></router-link>
        </li>
        <li>
          <v-icon>mdi-chevron-right</v-icon>
        </li>
        <li>{{ post.name }}</li>
      </ol>
    </div>
    <div class="py-5 mt-3 text-center">
      <h1>รายละเอียด</h1>
    </div>
    <v-container class="discription-stype">
      <h3>ลักษณะงาน</h3>
      <ul>
        <li>- ประจำสำนักงานใหญ่เชียงใหม่</li>
        <li>- ไปตรวจงานต่างจังหวัดได้</li>
        <li>- ควบคุมงานให้ตรงตามแผนงานของบริษัท</li>
        <li>- ควบคุมงาน ให้ถูกต้องตามหลักวิศวกรรม</li>
        <li>- ควบคุม โฟร์แมน คนงาน ให้ทำงานได้ตรงตามแผน</li>
        <li>- คิดปริมาณวัสดุก่อสร้างที่ใช้ภายในโครงการ</li>
      </ul>
      <p>
        (ทุกขั้นตอนมีที่ปรึกษา คอยให้คำปรึกษา เน้นรับบุคคลผู้มีความสนใจ ใฝ่รู้ อดทน พยายาม
        เปิดใจ พร้อมปรับตัวให้เข้ากับองค์กร)
      </p>
    </v-container>
    <div class="bg-parallax">
      <v-parallax :src="app_url + '/images/images-background/back-graound-join-us1.jpg'">
        <div class="bg-text">
          <v-container class="discription-stype">
            <h3>สวัสดิการ</h3>
            <ul>
              <li>- ประกันสังคม</li>
              <li>- ค่าอาหาร</li>
              <li>- ค่าเดินทาง</li>
              <li>- ชุดพนักงาน</li>
              <li>- กองทุนสำรองเลี้ยงชีพ</li>
            </ul>
          </v-container>
        </div>
      </v-parallax>
    </div>
    <v-container class="discription-stype">
      <h3>คุณสมบัติผู้สมัคร</h3>
      <!-- <v-divider :thickness="4" class="border-opacity-100" color="error"></v-divider> -->
      <ul>
        <li>- ชาย หรือ หญิง อายุ 23 ถึง 35 ปี</li>
        <li>- วุฒิการศึกษา ปริญญาตรี</li>
        <li>- ประสบการณ์ 0 ปีขึ้นไป</li>
        <li>- เพศชาย/หญิง, อายุ 23-30ปี</li>
        <li>- วุฒิการศึกษา ป.ตรี สาขา วิศวกรรมโยธา</li>
        <li>
          - มีความอดทน มีความรับผิดชอบ พร้อมเรียนรู้งาน
          พร้อมเรียนเทคนิคการก่อสร้างในรูปแบบของบริษัท
        </li>
        <li>- ไปตรวจงานต่างจังหวัดได้ (ไม่ประจำ)</li>
        <li>- มีประสบการณ์ ด้านการควบคุมงานก่อสร้างอาคาร จะพิจารณาเป็นพิเศษ</li>
      </ul>
      <v-divider></v-divider>
      <div class="text-center mt-5 mb-7">
        <v-btn variant="outlined" class="bg-btn">สมัครตำแหน่งนี้</v-btn>
      </div>
    </v-container>
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
    selectedItem: 0,
    items: [
      {
        id: 1,
        name: "วิศกรโยธา",
        img: "/images/images-join-us/join-us1.png",
      },
      {
        id: 2,
        name: "วิศกรไฟฟ้า",
        img: "/images/images-join-us/join-us2.png",
      },
      {
        id: 3,
        name: "โฟร์แมนไฟฟ้า",
        img: "/images/images-join-us/join-us4.png",
      },
      {
        id: 4,
        name: "โฟร์แมน(เดินทางต่างจังหวัด)",
        img: "/images/images-join-us/join-us5.png",
      },
      {
        id: 5,
        name: "พนักงานขับรถ 6 ล้อ",
        img: "/images/images-join-us/join-us6.png",
      },
      {
        id: 6,
        name: "พนักงานขับรถ 4 ล้อ",
        img: "/images/images-join-us/join-us7.png",
      },
      {
        id: 7,
        name: "เจ้าหน้าที่ธุรการประจำสำนักงาน",
        img: "/images/images-join-us/join-us3.png",
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
