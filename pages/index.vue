<template>
  <h1 class="text-blue-700 font-bold capitalize">{{ hello }}</h1>
</template>

<script setup>
import { getHello } from "~~/composables/get-hello"

const hello = ref()

onMounted(async () => {
  hello.value = await getHello()
})
</script>
