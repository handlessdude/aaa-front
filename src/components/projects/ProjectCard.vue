<template>
  <q-card>
    <q-card-section>
      <label class="text-h6">{{project.title}}</label>
    </q-card-section>
    <q-separator class="q-my-sm"/>
    <q-card-section>
      <label>{{project.description}}</label>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">

import {Project} from 'src/models/project-models';

interface ProjectCardProps {
  project: Project
}
defineProps<ProjectCardProps>();
</script>

<style scoped>

</style>
