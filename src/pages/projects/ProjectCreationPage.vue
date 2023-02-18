<template>
  <q-page class="column items-center" padding>
    <project-stepper
      @finished="showTooltip=true"
    >
    </project-stepper>
    <q-card
      v-if="showTooltip"
      class="fill-profile-step q-mt-lg"
    >
      <q-card-section
        class="column items-center"
      >
        <q-icon
          name="new_releases"
          color="teal"
          size="lg"
        />
        <div class="text-h6 q-mt-sm">
          Project form complete, do not forget to submit an application!
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import ProjectStepper from 'components/projects/ProjectStepper.vue';
import {ref} from 'vue';
const showTooltip = ref(false);

</script>

<style scoped>

</style>
