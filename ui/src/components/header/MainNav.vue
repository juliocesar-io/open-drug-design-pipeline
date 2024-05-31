<script setup lang="ts">
import { cn } from '@/lib/utils'
import { defineProps } from 'vue'

const props = defineProps({
  colorMode: String
})

</script>

<template>
  <nav
    :class="cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')"
  >
 
      <!-- SVG icon for dark mode -->
    <span v-if="props.colorMode === 'light'">
        <img style="width: 200px;" src="../../assets/odp-light.png" alt="">
    </span>

    <!-- SVG icon for light mode -->
    <span v-if="props.colorMode === 'dark'">
      <img style="width: 200px;" src="../../assets/odp-dark.png" alt="">
    </span>

  <a href="/" class="mr-4 md:mr-2 lg:mr-6 flex items-center lg:space-x1 xl:space-x-2">

       
  </a>
    <a
      href="/examples/dashboard"
      class="text-sm font-medium transition-colors hover:text-primary"
    >

    </a>

    
    
  </nav>
</template>
