<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { type BadgeVariants, badgeVariants } from '.'
import { cn } from '@/lib/utils'

const props = defineProps<{
  variant?: BadgeVariants['variant']
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn(badgeVariants({ variant }), props.class)">
    <slot />
  </div>
</template>

<style scoped>

.bg-healthy {
  background-color: #18c646;
  color: #ffffff;
}

.bg-degraded {
  background-color: #f5a623;
  color: #ffffff;
}

</style>
