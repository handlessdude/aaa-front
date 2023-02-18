<template>
  <q-banner dense class="bg-white no-padding" >
    <template v-slot:avatar>
      <q-icon :name="icon" color="amber"/>
    </template>
    <div class="text-body2">
      <slot></slot>
    </div>
  </q-banner>
</template>

<script setup lang="ts">
interface InfoBannerProps {
  icon: string;
}
defineProps<InfoBannerProps>();
</script>

<style scoped>

</style>
