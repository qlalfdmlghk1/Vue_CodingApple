<template>
  <h1>메인 페이지</h1>
  <button @click="$router.go(-1)">뒤로 가기</button>
  <router-link to="/list">이동하기</router-link>
  <div class="mt-5"></div>
  <router-view :blogContent="blogContent"></router-view>
</template>

<script>
import Blog from "@/assets/blog.js";
import List from "@/components/List.vue";

export default {
  name: "App",
  data() {
    return {
      blogContent: Blog,
    };
  },
  components: { List },
};
</script>

<style></style>
