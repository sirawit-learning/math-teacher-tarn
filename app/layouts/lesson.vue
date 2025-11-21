<script setup lang="ts">
import type { NavigationMenuItem } from "#ui/types";

const route = useRoute();
const lessonMenu1 = computed((): NavigationMenuItem[][] => [
  [
    {
      label: "เนื้อหาในบทเรียน",
      type: "label",
    },
    {
      label: "โจทย์ปัญหารอบตัว",
      to: `${route.path}#section1`,
      active: route.hash === "#section1",
    },
    {
      label: "สถานการณ์ชวนคิด",
      to: `${route.path}#section2`,
      active: route.hash === "#section2",
    },
    {
      label: "ภารกิจพิชิตโจทย์",
      to: `${route.path}#section3`,
      active: route.hash === "#section3",
    },
  ],
]);

watch(
  () => route.hash,
  () => {
    if (import.meta.client && window) window.scrollTo(0, 0);
  },
  {
    immediate: true,
  }
);
</script>
<template>
  <AppHeader />
  <div class="grid grid-cols-12">
    <aside
      class="hidden lg:block col-span-12 lg:col-span-2 border-r border-gray-200 dark:border-gray-800"
    >
      <div class="p-4 sticky top-20">
        <UNavigationMenu
          color="primary"
          :items="lessonMenu1"
          variant="link"
          orientation="vertical"
          :ui="{
            link: 'px-2 py-1 text-xl pb-2',
          }"
        />
      </div>
    </aside>
    <section class="col-span-12 lg:col-span-10 p-4">
      <slot />
    </section>
  </div>
  <AppFooter />
</template>
