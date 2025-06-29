<template>
  <h1>메인 페이지</h1>
  <router-link to="/list">이동하기</router-link>
  <router-view :blogContent="blogContent" class="mt-5"></router-view>
</template>

<script>
import List from "@/components/List.vue";
import Blog from "@/assets/blog.js";

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
