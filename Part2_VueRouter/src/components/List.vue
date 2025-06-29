<template>
  <div>
    <h5 @click="$router.push('/detail/0')">{{ blogContent[0].title }}</h5>
    <p>{{ blogContent[0].date }}</p>
  </div>
  <div>
    <h5 @click="$router.push('/detail/1')">{{ blogContent[1].title }}</h5>
    <p>{{ blogContent[1].date }}</p>
  </div>
  <div>
    <h5 @click="$router.push('/detail/2')">{{ blogContent[2].title }}</h5>
    <p>{{ blogContent[2].date }}</p>
  </div>
</template>

<script>
export default {
  props: {
    blogContent: Array,
  },
};
</script>

<style></style>
