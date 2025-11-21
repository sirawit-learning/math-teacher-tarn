<script setup lang="ts">
definePageMeta({
  layout: "lesson",
});
const route = useRoute();
const test = computed(() => {
  return [
    {
      title: "แบบทดสอบที่ 1",
      to: "https://www.liveworksheets.com/th/c?a=s&g=%E0%B8%9B.3&s=math&t=fnEyx4KoqY&mn=xz&sr=n&l=jf&i=odouxss&r=g2&f=dzdfuuuf&ms=uz&cd=pel-im9-jt-mglqejnjxmppb5ngnexxxexg&mw=hs",
    },
    {
      title: "แบบทดสอบที่ 2",
      to: "https://www.liveworksheets.com/th/c?a=s&g=%E0%B8%9B.3&s=math&t=fnEyx4KoqY&mn=xz&sr=n&l=mh&i=odoufzs&r=v9&f=dzdfuuuf&ms=uz&cd=pel-im9-jt-mglvwjnjxegpy4ngnexxxexg&mw=hs",
    },
  ];
});
const items = [
  {
    label: "บทเรียน",
    to: "/courses",
  },
  {
    label: "การเปรียบเทียบหาความแตกต่าง",
  },
];
useSeoMeta({
  title: "การเปรียบเทียบหาความแตกต่าง",
  description: "การเปรียบเทียบหาความแตกต่าง",
  ogImage:
    "https://ncrsgvuccmyxefxhnqko.supabase.co/storage/v1/object/public/tarn/lesson2.png",
});
</script>
<template>
  <div class="m-4 flex flex-col gap-4" v-if="!route.hash">
    <UBreadcrumb :items="items" />
    <NuxtImg
      src="https://ncrsgvuccmyxefxhnqko.supabase.co/storage/v1/object/public/tarn/lesson2.png"
      alt="Lesson"
      class="w-full rounded-lg shadow"
    />
    <USeparator />
    <div class="flex flex-col sm:flex-row justify-between gap-4">
      <UButton
        to="/courses/"
        color="neutral"
        class="w-full sm:w-fit"
        icon="i-lucide-arrow-left"
        size="xl"
        variant="outline"
        block
      >
        ไปยังหน้าบทเรียนทั้งหมด
      </UButton>
      <UButton
        to="/courses/lesson2#section1"
        color="neutral"
        class="w-full sm:w-fit"
        icon="i-lucide-arrow-right"
        variant="soft"
        size="xl"
        block
      >
        ไปยังโจทย์ปัญหารอบตัวเรา
      </UButton>
    </div>
  </div>

  <div class="m-4 flex flex-col gap-4" v-if="route.hash === '#section1'">
    <h2 class="text-3xl font-bold">
      โจทย์ปัญหารอบตัวเรา การเปรียบเทียบหาความแตกต่าง
    </h2>
    <h3 class="text-xl font-semibold mt-2">
      ให้นักเรียนเรียนรู้และรับชมวิดีโอบทเรียนโจทย์ปัญหาการลบ
      การเปรียบเทียบหาความแตกต่าง
    </h3>
    <UCard
      :ui="{
        root: ' aspect-video',
        body: 'p-0!',
      }"
    >
      <iframe
        class="aspect-video"
        src="https://www.youtube.com/embed/VZ6Bn13VrEM"
        frameborder="0"
        allowfullscreen
        width="100%"
        height="100%"
      ></iframe>
    </UCard>
    <USeparator class="my-6" />
    <h3 class="text-xl font-semibold">
      ให้นักเรียนตอบคำถามหลังจากรับชมวิดีโอบทเรียนโจทย์ปัญหาการลบ
      การเปรียบเทียบหาความแตกต่าง
    </h3>
    <UCard
      :ui="{
        root: ' h-[80dvh] sm:aspect-video',
        body: 'p-0!',
      }"
    >
      <iframe
        class="h-[80dvh] sm:aspect-video"
        src="https://padlet.com/sirapattarn/padlet-m0qm8h6z7t9701zg"
        frameborder="0"
        allowfullscreen
        width="100%"
        height="100%"
      ></iframe>
    </UCard>
    <USeparator />
    <div class="flex flex-col sm:flex-row justify-between gap-4">
      <UButton
        to="/courses/lesson2"
        color="neutral"
        class="w-full sm:w-fit"
        icon="i-lucide-arrow-left"
        size="xl"
        variant="outline"
        block
      >
        ไปยังหน้าปก
      </UButton>
      <UButton
        to="/courses/lesson2#section2"
        color="neutral"
        class="w-full sm:w-fit"
        icon="i-lucide-arrow-right"
        variant="soft"
        size="xl"
        block
      >
        ไปยังสถานการณ์ชวนคิด
      </UButton>
    </div>
  </div>

  <div class="m-4 flex flex-col gap-4" v-if="route.hash === '#section2'">
    <h2 class="text-3xl font-bold">
      สถานการณ์ชวนคิด การเปรียบเทียบหาความแตกต่าง
    </h2>
    <h3 class="text-xl font-semibold mt-2">
      ให้นักเรียนรับชมวิดีโอโจทย์ปัญหาการลบ การเปรียบเทียบหาความแตกต่าง
    </h3>
    <UCard
      :ui="{
        root: ' aspect-video',
        body: 'p-0!',
      }"
    >
      <iframe
        class="aspect-video"
        src="https://www.youtube.com/embed/ikdUOPJQ2ZE"
        frameborder="0"
        allowfullscreen
        width="100%"
        height="100%"
      ></iframe>
    </UCard>
    <USeparator class="my-6" />
    <h3 class="text-xl font-semibold">
      ให้นักเรียนสร้างแบบจำลองความคิดจากโจทย์ปัญหาการลบ
    </h3>
    <UButton
      to="https://kleki.com/"
      target="_blank"
      color="neutral"
      class="w-fit"
      trailing-icon="i-lucide-arrow-right"
      size="xl"
    >
      เริ่มสร้างแบบจำลองความคิด
    </UButton>
    <USeparator class="my-6" />
    <h3 class="text-xl font-semibold">
      ให้นักเรียนตอบคำถามหลังจากรับชมวิดีโอบทเรียนโจทย์ปัญหาการลบ
      การเปรียบเทียบหาความแตกต่าง
    </h3>
    <UCard
      :ui="{
        root: ' h-[80dvh] sm:aspect-video',
        body: 'p-0!',
      }"
    >
      <iframe
        class="h-[80dvh] sm:aspect-video"
        src="https://padlet.com/yamjard_53p/padlet-hy2gih0vrm8alpfm"
        frameborder="0"
        allowfullscreen
        width="100%"
        height="100%"
      ></iframe>
    </UCard>
    <USeparator />
    <div class="flex flex-col sm:flex-row justify-between gap-4">
      <UButton
        to="/courses/lesson2#section1"
        color="neutral"
        class="w-full sm:w-fit"
        icon="i-lucide-arrow-left"
        size="xl"
        variant="outline"
        block
      >
        ไปยังโจทย์ปัญหารอบตัวเรา
      </UButton>
      <UButton
        to="/courses/lesson2#section3"
        color="neutral"
        class="w-full sm:w-fit"
        icon="i-lucide-arrow-right"
        variant="soft"
        size="xl"
        block
      >
        ไปยังภารกิจพิชิตโจทย์
      </UButton>
    </div>
  </div>

  <div class="m-4 flex flex-col gap-4" v-if="route.hash === '#section3'">
    <h2 class="text-3xl font-bold">
      ภารกิจพิชิตโจทย์ปัญหาการลบ การเปรียบเทียบหาความแตกต่าง
    </h2>
    <h3 class="text-xl font-semibold mt-2">
      ให้นักเรียนเรียนรู้และรับชมวิดีโอบทเรียนโจทย์ปัญหาการลบ
      การเปรียบเทียบหาความแตกต่าง
    </h3>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2" v-for="item in test" :key="item.title">
        <h3 class="text-xl">{{ item.title }}</h3>
        <UButton
          :to="item.to"
          target="_blank"
          color="neutral"
          class="w-fit"
          trailing-icon="i-lucide-arrow-right"
          size="xl"
        >
          เริ่มทำแบบทดสอบ
        </UButton>
      </div>
    </div>
    <USeparator class="my-6" />
    <div class="flex flex-col sm:flex-row justify-between gap-4">
      <UButton
        to="/courses/lesson2#section2"
        color="neutral"
        class="w-full sm:w-fit"
        icon="i-lucide-arrow-left"
        size="xl"
        variant="outline"
        block
      >
        ไปยังสถานการณ์ชวนคิด
      </UButton>
      <UButton
        to="/courses/lesson3"
        color="neutral"
        class="w-full sm:w-fit"
        icon="i-lucide-arrow-right"
        variant="soft"
        size="xl"
        block
      >
        ไปยังบทเรียนถัดไป
      </UButton>
    </div>
  </div>
</template>
