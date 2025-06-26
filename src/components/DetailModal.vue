<template>
  <div class="black-bg" v-if="isModal == true">
    <div class="white-bg">
      <img :src="roomData[clickedId].image" style="width: 100%" />
      <h4>{{ roomData[clickedId].title }}</h4>
      <p>{{ roomData[clickedId].content }}</p>
      <p>{{ roomData[clickedId].price }} 원</p>
      <!-- <button @click="isModal = false">닫기</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailModal",
  props: {
    roomData: Array,
    clickedId: Number,
    isModal: Boolean,
  },
};
</script>

<style></style>
