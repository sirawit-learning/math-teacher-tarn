<script setup lang="ts">
definePageMeta({
  layout: "lesson",
});
const route = useRoute();
const test = computed(() => {
  return [
    {
      title: "แบบทดสอบที่ 1",
      to: "https://www.liveworksheets.com/c?a=s&g=%E0%B8%9B.3&s=math&t=fnEyx4KoqY&mn=xz&sr=n&l=f6&i=odoufos&r=xq&f=dzdfuuuf&ms=uz&cd=pel-im9-jt-mgle1jnjxejpmtngnexxxexg&mw=hs",
    },
    {
      title: "แบบทดสอบที่ 2",
      to: "https://www.liveworksheets.com/c?a=s&g=%E0%B8%9B.3&s=math&t=fnEyx4KoqY&mn=xz&sr=n&l=yp&i=odouctf&r=ud&f=dzdfuuuf&ms=uz&cd=pel-im9-jt-mglihjnjxkzexnngnexxxexg&mw=hs",
    },
  ];
});
const items = [
  {
    label: "บทเรียน",
    to: "/courses",
  },
  {
    label: "การหาจำนวนที่เหลือ",
  },
];
useSeoMeta({
  title: "การหาจำนวนที่เหลือ",
  description: "การหาจำนวนที่เหลือ",
  ogImage:
    "https://ncrsgvuccmyxefxhnqko.supabase.co/storage/v1/object/public/tarn/lesson1.png",
});
</script>
<template>
  <div class="m-4 flex flex-col gap-4" v-if="!route.hash">
    <UBreadcrumb :items="items" />
    <NuxtImg
      src="https://ncrsgvuccmyxefxhnqko.supabase.co/storage/v1/object/public/tarn/lesson1.png"
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
        to="/courses/lesson1#section1"
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
    <h2 class="text-3xl font-bold">โจทย์ปัญหารอบตัวเรา การหาจำนวนที่เหลือ</h2>
    <h3 class="text-xl font-semibold mt-2">
      ให้นักเรียนเรียนรู้และรับชมวิดีโอบทเรียนโจทย์ปัญหาการลบ การหาจำนวนที่เหลือ
    </h3>
    <UCard
      :ui="{
        root: 'aspect-video',
        body: 'p-0!',
      }"
    >
      <iframe
        class="aspect-video"
        src="https://www.youtube.com/embed/xCwyApXmMqQ"
        frameborder="0"
        allowfullscreen
        width="100%"
        height="100%"
      ></iframe>
    </UCard>
    <USeparator class="my-6" />
    <h3 class="text-xl font-semibold">
      ให้นักเรียนตอบคำถามหลังจากรับชมวิดีโอบทเรียนโจทย์ปัญหาการลบ
      การหาจำนวนที่เหลือ
    </h3>
    <UCard
      :ui="{
        root: 'h-[80dvh] sm:aspect-video',
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
        to="/courses/lesson1"
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
        to="/courses/lesson1#section2"
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
    <h2 class="text-3xl font-bold">สถานการณ์ชวนคิด การหาจำนวนที่เหลือ</h2>
    <h3 class="text-xl font-semibold mt-2">
      ให้นักเรียนรับชมวิดีโอโจทย์ปัญหาการลบ การหาจำนวนที่เหลือ
    </h3>
    <UCard
      :ui="{
        root: ' aspect-video',
        body: 'p-0!',
      }"
    >
      <iframe
        class="aspect-video"
        src="https://www.youtube.com/embed/t53KgHEvBrA"
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
    <USeparator />
    <div class="flex flex-col sm:flex-row justify-between gap-4">
      <UButton
        to="/courses/lesson1#section1"
        color="neutral"
        class="w-full sm:w-fit"
        icon="i-lucide-arrow-left"
        size="xl"
        variant="outline"
        block
      >
        ไปยังโจทย์ปัญหารอบตัว
      </UButton>
      <UButton
        to="/courses/lesson1#section3"
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
      ภารกิจพิชิตโจทย์ปัญหาการลบ การหาจำนวนที่เหลือ
    </h2>
    <h3 class="text-xl font-semibold mt-2">
      ให้นักเรียนรับชมวิดีโอโจทย์ปัญหาการลบ การหาจำนวนที่เหลือ
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
    <USeparator />
    <div class="flex flex-col sm:flex-row justify-between gap-4">
      <UButton
        to="/courses/lesson1#section2"
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
        to="/courses/lesson2"
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
