<script setup lang="ts"></script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <UAvatar
          src="https://ncrsgvuccmyxefxhnqko.supabase.co/storage/v1/object/public/tarn/logo.png"
          alt="Logo"
          class="w-10 h-10"
        />
      </NuxtLink>
      <TemplateMenu />
    </template>

    <UNavigationMenu
      :items="[
        {
          label: 'หน้าหลัก',
          to: '/',
        },
        {
          label: 'บทเรียน',
          to: '/courses',
        },
      ]"
      variant="link"
    />

    <template #right>
      <ColorModeButton />
    </template>
    <template #body>
      <UNavigationMenu
        orientation="vertical"
        class="-mx-2.5"
        :items="[
          {
            label: 'หน้าหลัก',
            to: '/',
          },
          {
            label: 'บทเรียน',
            to: '/courses',
          },
        ]"
        variant="link"
      />
    </template>
  </UHeader>
</template>
