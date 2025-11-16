<script setup lang="ts">
const test = computed(() => {
  return [
    {
      title: "แบบทดสอบที่ 1",
      to: "https://www.liveworksheets.com/th/c?a=s&g=%E0%B8%9B.3&s=math&t=fnEyx4KoqY&mn=xz&sr=n&l=df&i=odouxxo&r=sj&f=dzdfuuuf&ms=uz&cd=pel-im9-jt-mglnejnjxmmjpqngnexxxexg&mw=hs",
    },
    {
      title: "แบบทดสอบที่ 2",
      to: "https://www.liveworksheets.com/th/c?a=s&g=%E0%B8%9B.3&s=math&t=fnEyx4KoqY&mn=xz&sr=n&l=qm&i=odozoxz&r=yx&f=dzdfuuuf&ms=uz&cd=pel-im9-jt-mgltvjnjgjmgimngnexxxexg&mw=hs",
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
  ogImage:
    "https://ncrsgvuccmyxefxhnqko.supabase.co/storage/v1/object/public/tarn/lesson3.png",
});
</script>
<template>
  <NuxtImg
    src="https://ncrsgvuccmyxefxhnqko.supabase.co/storage/v1/object/public/tarn/lesson3.png"
    alt="Lesson"
    class="w-full lg:max-w-[80dvw] mx-auto"
  />
  <UContainer>
    <div class="flex flex-col gap-6 mt-4">
      <UBreadcrumb :items="items" />
      <h1 class="text-2xl font-bold text-center">การหาจำนวนที่ต้องหามาเพิ่ม</h1>
      <h2 class="text-lg font-bold">
        โจทย์ปัญหารอบตัวเรา การหาจำนวนที่ต้องหามาเพิ่ม
      </h2>
      ...
      <div class="flex flex-col gap-2">
        <h2 class="text-lg font-bold">
          สถานการณ์ชวนคิด การหาจำนวนที่ต้องหามาเพิ่ม
        </h2>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <h3 class="text-base">
              ให้นักเรียนรับชมวิดีโอโจทย์ปัญหาการลบ การหาจำนวนที่ต้องหามาเพิ่ม
            </h3>
            <UCard
              :ui="{
                root: 'max-w-[1024px]! aspect-video',
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
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-base">
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
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-base">
              ให้นักเรียน<b><u>ตอบคำถาม</u></b
              >หลังจากรับชมวิดีโอโจทย์ปัญหาการลบ การหาจำนวนที่ต้องหามาเพิ่ม
            </h3>
            <UCard
              :ui="{
                root: 'max-w-[1024px]! h-[60dvh] sm:aspect-video',
                body: 'p-0!',
              }"
            >
              <iframe
                class="h-[60dvh] sm:aspect-video"
                src="https://padlet.com/yamjard_53p/padlet-slubtdshlbeib2em"
                frameborder="0"
                allowfullscreen
                width="100%"
                height="100%"
              ></iframe>
            </UCard>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h2 class="text-lg font-bold">
          ภารกิจพิชิตโจทย์ปัญหาการลบ การหาจำนวนที่ต้องหามาเพิ่ม
        </h2>
        <div class="flex flex-col gap-4">
          <div
            class="flex flex-col gap-2"
            v-for="item in test"
            :key="item.title"
          >
            <h3 class="text-base">{{ item.title }}</h3>
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
      </div>
    </div>

    <USeparator class="my-6" />
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
        ไปยังบทเรียนก่อนหน้า
      </UButton>
      <UButton
        to="/courses"
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
  </UContainer>
</template>
