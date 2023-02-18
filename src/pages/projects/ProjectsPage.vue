<template>
  <q-page padding class="column items-start">
    <q-btn
      icon="add_circle"
      label="Create new project"
      @click="redirectToProjectCreation"
    />
    <q-list class="full-width q-mt-md">
      <project-card
        v-for="project in projects"
        :key="project.id"
        :project="project"
        class="q-mb-md"
      />
    </q-list>
  </q-page >
</template>

<script setup lang="ts">
import ProjectCard from 'components/projects/ProjectCard.vue';
import {range} from 'ts-list-comprehension';
import {Project} from 'src/models/project-models';
import {useRouter} from 'vue-router';
import routeNames from 'src/router/route-names'
const router = useRouter();

const projects : Project[] = range(0,3).map((value) => {
  return {
    id: `${value}`,
    title: `test title ${value}`,
    description: `test description ${value}`,
  }
});

const redirectToProjectCreation = async () => {
  await router.push({ name: routeNames.newProject });
};
</script>

<style scoped lang="scss">
.fill-profile-step {
  min-width: 320px;
  width: 70vw;
  // border-radius: 10px;
}
</style>
