<script setup lang="ts">
import { COURSES } from "@/constants/course";
const blogs = computed(() => {
  return COURSES.map((item, index) => {
    return {
      ...item,
      title: item.title,
      image: `https://ncrsgvuccmyxefxhnqko.supabase.co/storage/v1/object/public/tarn/lesson${
        index + 1
      }.png`,
    };
  });
});
</script>

<template>
  <UBlogPosts :posts="blogs" />
</template>
