<template>
  <div class="black-bg" v-if="isModal == true">
    <div class="white-bg">
      <img :src="roomData[clickedId].image" style="width: 100%" />
      <h3>{{ roomData[clickedId].title }}</h3>
      <p>{{ roomData[clickedId].content }}</p>
      <p>{{ roomData[clickedId].price }} 원</p>
      <input v-model.number="month" />
      <br />
      <p>총 금액: {{ roomData[clickedId].price * month }} 원</p>
      <button @click="$emit('closeModal')">닫기</button>
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
  data() {
    return {
      month: 0,
    };
  },
  watch: {
    month(a) {
      if (isNaN(a)) {
        alert("숫자만 입력해주세요.");
        this.month = 1;
      }
      if (a > 12) alert("최대 12개월까지만 가능합니다.");
    },
  },
  beforeUpdate() {
    // Dom이 업데이트 되기 전에 실행되는 라이프사이클 훅
    if (this.month == 2) {
      alert("2개월은 너무 적음.. 안팝니다");
      this.month = 3;
    }
  },
};
</script>

<style>
.black-bg {
  display: flex;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  justify-content: center;
  text-align: center;
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
