<template>
  <div>
    <img :src="roomData.image" class="room-img" />
    <h4 @click="$emit('openModal', roomData.id)">{{ roomData.title }}</h4>
    <p>{{ roomData.price }} 원</p>
  </div>
</template>

<script>
export default {
  name: "CardView",
  props: {
    roomData: Array,
  },
};
</script>

<style></style>
