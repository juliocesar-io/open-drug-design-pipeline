<script setup lang="ts">
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../ui/avatar'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const givenName = ref('')
const email = ref('')
const name = ref('')
const router = useRouter()

const retrieveData = () => {
  try {
    givenName.value = sessionStorage.getItem('givenName') || ''
    email.value = sessionStorage.getItem('email') || ''
    name.value = sessionStorage.getItem('name') || ''
  } catch (error){
        // Redirect to /login
        // router.push('/login');
  }
};
const logout = () => {
    sessionStorage.clear()
    router.push('/login')
};
onMounted(retrieveData);
</script>

<template>

</template>
