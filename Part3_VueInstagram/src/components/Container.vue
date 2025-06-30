<template>
  <div>
    <Post :post="a" v-for="(a, i) in posts" :key="i" />
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  name: "Container",
  data() {
    return {};
  },
  props: {
    posts: Array,
  },
  components: {
    Post,
  },
};
</script>

<style lang="scss" scoped></style>
