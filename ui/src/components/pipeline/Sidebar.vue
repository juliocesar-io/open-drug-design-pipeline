<script setup lang="ts">
import type { Playlist } from './data/playlists'
import { cn } from '@/lib/utils'
import { Button } from './../ui/button'

interface SidebarProps {
  playlists: Playlist[]
}

defineProps<SidebarProps>()
</script>

<template>
  <div :class="cn('pb-12', $attrs.class ?? '')">
    <div class="space-y-4 py-4">
      <div class="px-3 py-2">
        <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">
          AI Pipeline
        </h2>
        <div class="space-y-1">
          <Button variant="secondary" class="w-full justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="mr-2 h-4 w-4"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
            Run (AMPs)
          </Button>
          <Button variant="ghost" class="w-full justify-start" disabled>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="mr-2 h-4 w-4"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
            Models
          </Button>
          <Button variant="ghost" class="w-full justify-start" disabled>

            Settings
          </Button>
        </div>
      </div>
      <div class="px-3 py-2">
        <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">
          Training & Data
        </h2>
        <div class="space-y-1">
          <Button variant="ghost" class="w-full justify-start" disabled>
           
            Ligands
          </Button>
          <Button variant="ghost" class="w-full justify-start" disabled>
           
            Datasets
          </Button>
          <Button variant="ghost" class="w-full justify-start" disabled>
           
            Fine Tune
          </Button>

        </div>
      </div>

    </div>
  </div>
</template>
