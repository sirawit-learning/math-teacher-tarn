<template>
  <UContainer>
    <AppHeader />
    <div class="grid grid-cols-12">
      <aside class="col-span-2">1</aside>
      <section class="col-span-10">
        <slot />
      </section>
    </div>
    <AppFooter />
  </UContainer>
</template>
