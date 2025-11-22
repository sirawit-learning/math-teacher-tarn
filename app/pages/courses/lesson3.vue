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
      image: "https://math-teacher-tarn.vercel.app/images/test-1.png",
    },
    {
      title: "แบบทดสอบที่ 2",
      to: "https://www.liveworksheets.com/th/c?a=s&g=%E0%B8%9B.3&s=math&t=fnEyx4KoqY&mn=xz&sr=n&l=mh&i=odoufzs&r=v9&f=dzdfuuuf&ms=uz&cd=pel-im9-jt-mglvwjnjxegpy4ngnexxxexg&mw=hs",
      image: "https://math-teacher-tarn.vercel.app/images/test-2.png",
    },
  ];
});
const items = [
  {
    label: "บทเรียน",
    to: "/courses",
  },
  {
    label: "การหาจำนวนที่ต้องหามาเพิ่ม",
  },
];
useSeoMeta({
  title: "การหาจำนวนที่ต้องหามาเพิ่ม",
  description: "การหาจำนวนที่ต้องหามาเพิ่ม",
  ogImage: "https://math-teacher-tarn.vercel.app/images/lesson3.png",
});
</script>
<template>
  <div class="m-4 flex flex-col gap-4" v-if="!route.hash">
    <UBreadcrumb :items="items" />
    <NuxtImg
      src="https://math-teacher-tarn.vercel.app/images/lesson3.png"
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
        to="/courses/lesson3#section1"
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
      โจทย์ปัญหารอบตัวเรา การหาจำนวนที่ต้องหามาเพิ่ม
    </h2>
    <h3 class="text-xl font-semibold mt-2">
      ให้นักเรียนเรียนรู้และรับชมวิดีโอบทเรียนโจทย์ปัญหาการลบ
      การหาจำนวนที่ต้องหามาเพิ่ม
    </h3>
    <UCard
      :ui="{
        root: ' aspect-video',
        body: 'p-0!',
      }"
    >
      <iframe
        class="aspect-video"
        src="https://www.youtube.com/embed/BABvNyXLW4I"
        frameborder="0"
        allowfullscreen
        width="100%"
        height="100%"
      ></iframe>
    </UCard>
    <USeparator class="my-6" />
    <h3 class="text-xl font-semibold">
      ให้นักเรียนตอบคำถามหลังจากรับชมวิดีโอบทเรียนโจทย์ปัญหาการลบ
      การหาจำนวนที่ต้องหามาเพิ่ม
    </h3>
    <UCard
      :ui="{
        root: ' h-[80dvh] sm:aspect-video',
        body: 'p-0!',
      }"
    >
      <iframe
        class="h-[80dvh] sm:aspect-video"
        src="https://padlet.com/sirapattarn/padlet-8y5ngubvci1g1hlr"
        frameborder="0"
        allowfullscreen
        width="100%"
        height="100%"
      ></iframe>
    </UCard>
    <USeparator />
    <div class="flex flex-col sm:flex-row justify-between gap-4">
      <UButton
        to="/courses/lesson3"
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
        to="/courses/lesson3#section2"
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
      สถานการณ์ชวนคิด การหาจำนวนที่ต้องหามาเพิ่ม
    </h2>
    <h3 class="text-xl font-semibold mt-2">
      ให้นักเรียนรับชมวิดีโอโจทย์ปัญหาการลบ การหาจำนวนที่ต้องหามาเพิ่ม
    </h3>
    <UCard
      :ui="{
        root: ' aspect-video',
        body: 'p-0!',
      }"
    >
      <iframe
        class="aspect-video"
        src="https://www.youtube.com/embed/7-VC-Zuoc8A"
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
    <div class="flex flex-col">
      <NuxtLink to="https://kleki.com/" target="_blank">
        <NuxtImg
          src="https://math-teacher-tarn.vercel.app/images/simulation.png"
          alt="Kleki"
          class="w-full"
        />
      </NuxtLink>
      <UButton
        to="https://kleki.com/"
        target="_blank"
        color="neutral"
        class="w-fit mx-auto"
        trailing-icon="i-lucide-arrow-right"
        size="xl"
      >
        เริ่มสร้างแบบจำลองความคิด
      </UButton>
    </div>
    <USeparator class="my-6" />
    <h3 class="text-xl font-semibold">
      ให้นักเรียนตอบคำถามหลังจากรับชมวิดีโอโจทย์ปัญหาการลบ
      การหาจำนวนที่ต้องหามาเพิ่ม
    </h3>
    <UCard
      :ui="{
        root: ' h-[80dvh] sm:aspect-video',
        body: 'p-0!',
      }"
    >
      <iframe
        class="h-[80dvh] sm:aspect-video"
        src="https://padlet.com/yamjard_53p/padlet-413qunjz75h2rwdw"
        frameborder="0"
        allowfullscreen
        width="100%"
        height="100%"
      ></iframe>
    </UCard>
    <USeparator />
    <div class="flex flex-col sm:flex-row justify-between gap-4">
      <UButton
        to="/courses/lesson3#section1"
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
        to="/courses/lesson3#section3"
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
      ภารกิจพิชิตโจทย์ปัญหาการลบ การหาจำนวนที่ต้องหามาเพิ่ม
    </h2>
    <div class="flex flex-col gap-4">
      <div
        class="flex flex-col"
        v-for="(item, index) in test"
        :key="item.title"
      >
        <NuxtLink :to="item.to" target="_blank">
          <NuxtImg :src="item.image" :alt="item.title" class="w-full" />
        </NuxtLink>
        <UButton
          :to="item.to"
          target="_blank"
          color="neutral"
          class="w-fit mx-auto"
          trailing-icon="i-lucide-arrow-right"
          size="xl"
        >
          เริ่มทำ {{ item.title }}
        </UButton>
        <USeparator class="my-6" v-if="index !== test.length - 1" />
      </div>
    </div>
    <USeparator />
    <div class="flex flex-col sm:flex-row justify-between gap-4">
      <UButton
        to="/courses/lesson3#section2"
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
        to="/courses/"
        color="neutral"
        class="w-full sm:w-fit"
        icon="i-lucide-arrow-right"
        variant="soft"
        size="xl"
        block
      >
        ไปยังบทเรียนทั้งหมด
      </UButton>
    </div>
  </div>
</template>
