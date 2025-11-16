<script setup lang="ts">
import { COURSES } from "~/constants";
const courses = computed(() => {
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
  <UContainer class="py-10 flex flex-col gap-4">
    <h1 class="text-2xl font-bold">บทเรียน</h1>
    <UBlogPosts :posts="courses" />
  </UContainer>
</template>
