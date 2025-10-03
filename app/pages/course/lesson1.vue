<script setup lang="ts">
const navigation = ref([
  {
    label: "เนื้อหา",
    to: "#getting-started",
  },
  {
    label: "สถานการณ์ชวนคิด",
    to: "#getting-started",
  },
  {
    label: "แบบทดสอบ",
    to: "#getting-started",
  },
]);
</script>
<template>
  <UPage>
    <UPageHeader title="การหาจำนวนที่เหลือ" />
    <template #left>
      <UPageAside>
        1
        <UNavigationMenu
          orientation="vertical"
          :items="navigation"
          class="w-full"
        />
      </UPageAside>
    </template>
    <UPageBody> 2 </UPageBody>
  </UPage>
</template>
