<script setup lang="ts">
window.global = window
import MainNav from './header/MainNav.vue'
import UserNav from './header/UserNav.vue'
import { useColorMode } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import Pipeline from '../Pipeline.vue'

const mode = useColorMode()

</script>

<template>
  <div class="hidden flex-col md:flex">
    <div class="border-b">
      <div class="flex h-16 items-center px-4">
        
        <MainNav :colorMode="mode" class="mx-6" />
        <div class="ml-auto flex items-center space-x-4">
          <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline">
              <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span class="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem @click="mode = 'light'">
              Light
            </DropdownMenuItem>
            <DropdownMenuItem @click="mode = 'dark'">
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem @click="mode = 'auto'">
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
          <UserNav />
        </div>
      </div>
    </div>
    <Pipeline />
    
  </div>
</template>

<style scoped>
.svg-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Adjust as needed */
}

</style>
