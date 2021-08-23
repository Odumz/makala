<template>
  <div v-if="name == ''">
    <div class="bg-alerts-muted border-alerts-base text-alerts-base px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold"><slot name="title"></slot></strong>
      <span class="block sm:inline"><slot name="text"></slot> </span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <slot name="icon"></slot>
      </span>
    </div>
  </div>
  <div v-else-if="name == 'modern-badge'">
    <div class="bg-alerts-base-darker text-center py-4 lg:px-4">
      <div class="p-2 bg-alerts-base-dark items-center text-skin-base dark:text-gray-800 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
        <span class="flex rounded-full bg-alerts-base uppercase px-2 py-1 text-xs font-bold mr-3"><slot name="title"></slot></span>
        <span class="font-semibold mr-2 text-left flex-auto"><slot name="text"></slot></span>
        <slot name="icon"></slot>
      </div>
    </div>
  </div>
  <div v-else-if="name == 'left-border'">
    <div class="bg-alerts-muted border-l-4 border-alerts-base text-left text-alerts-base p-4" role="alert">
      <p class="font-bold"><slot name="title"></slot></p>
      <p><slot name="text"></slot></p>
    </div>
  </div>
  <div v-else-if="name == 'titled'">
    <div role="alert">
      <div class="bg-alerts-base text-skin-base dark:text-gray-800 font-bold rounded-t px-4 py-2">
        <slot name="title"></slot>
      </div>
      <div class="border border-t-0 border-alerts-base border-opacity-70 rounded-b bg-alerts-muted px-4 py-3 text-alerts-base">
        <p><slot name="text"></slot></p>
      </div>
    </div>
  </div>
  <div v-else-if="name == 'solid'">
    <div class="flex items-center bg-alerts-base text-skin-base dark:text-gray-800 text-sm font-bold px-4 py-3" role="alert">
      <slot name="icon"></slot>
      <slot name="text"></slot>
    </div>
  </div>
  <div v-else-if="name == 'top-border'">
    <div class="bg-alerts-muted border-t-4 border-alerts-base rounded-b text-left text-alerts-base px-4 py-3 shadow-md" role="alert">
      <div class="flex">
        <div class="py-1"><slot name="icon"></slot></div>
        <div>
          <p class="font-bold"><slot name="title"></slot></p>
          <p class="text-sm"><slot name="text"></slot></p>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="name == 'banner'">
    <div class="text-left bg-alerts-muted border-t border-b border-alerts-base text-alerts-base px-4 py-3" role="alert">
      <p class="font-bold"><slot name="title"></slot></p>
      <p class="text-sm"><slot name="text"></slot></p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        }
    },
}
</script>