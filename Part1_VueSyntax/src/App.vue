<template>
  <DetailModal @closeModal="isModal = false" :isModal="isModal" :roomData="roomData" :clickedId="clickedId" />

  <div class="centerStyle">
    <div class="menu">
      <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
    </div>
    <DiscountBanner :discountRate="discountRate" />
    <button @click="priceSort()">가격순 정렬</button>
    <button @click="sortBack()">정렬 원상복귀</button>
    <CardView
      @openModal="
        isModal = true;
        clickedId = $event;
      "
      :roomData="roomData[i]"
      v-for="(room, i) in roomData"
      :key="i"
    />
  </div>
</template>

<script>
import oneRoom from "@/assets/oneroom.js";
import CardView from "@/components/CardView.vue";
import DetailModal from "@/components/DetailModal.vue";
import DiscountBanner from "@/components/DiscountBanner.vue";

export default {
  name: "App",
  data() {
    return {
      menus: ["Home", "Shop", "About"],
      roomDataOriginal: [...oneRoom],
      roomData: [...oneRoom],
      clickedId: 0,
      isModal: false,
      discountRate: 20,
    };
  },

  methods: {
    priceSort() {
      this.roomData.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    sortBack() {
      this.roomData = [...this.roomDataOriginal];
    },
  },

  mounted() {
    setInterval(() => {
      this.discountRate--;
      if (this.discountRate < 0) {
        this.discountRate = 20;
      }
    }, 1000);
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
