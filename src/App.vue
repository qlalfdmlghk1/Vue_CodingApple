<template>
  <DetailModal :isModal="isModal" :roomData="roomData" :clickedId="clickedId" />

  <div class="centerStyle">
    <div class="menu">
      <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
    </div>
    <DiscountBanner />
    <CardView :room="roomData[i]" v-for="(room, i) in roomData" :key="i" />
  </div>
</template>

<script>
import oneRoom from "./assets/oneroom.js";
import DiscountBanner from "./components/DiscountBanner.vue";
import DetailModal from "./components/DetailModal.vue";
import CardView from "./components/CardView.vue";

export default {
  name: "App",
  data() {
    return {
      menus: ["Home", "Shop", "About"],
      roomData: oneRoom,
      clickedId: 0,
      isModal: false,
    };
  },

  methods: {
    increase() {
      this.신고수 += 1;
    },
  },

  components: {
    DiscountBanner,
    DetailModal,
    CardView,
  },
};
</script>

<style>
header {
  line-height: 1.5;
}

.centerStyle {
  justify-content: center;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}

body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
