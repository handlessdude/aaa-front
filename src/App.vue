<template>
  <router-view />
</template>

<script setup lang="ts">
import {onMounted} from 'vue';

onMounted(()=>{
  console.log('Миша, енвы - тебе.', import.meta.env);
})
</script>
