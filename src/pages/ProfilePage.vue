<template>
  <q-page class="column items-center" padding>
    <q-card class="full-width">
      <q-tabs
        v-model="tab"
        class="text-grey col-8"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="generalInfo" label="General info" />
        <q-tab name="filters" label="Grant Filters" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="generalInfo">
          <info-banner icon="help">
            Here you can specify your general info.
          </info-banner>
        </q-tab-panel>

        <q-tab-panel name="filters" class="column">
          <info-banner icon="help">
            Here you can specify grant filters according to your preferences.
          </info-banner>
          <grant-filter
            v-model:eventTypes="eventTypes"
            v-model:expenseFork="expenseFork"
            v-model:regions="regions"
            v-model:scales="scales"
          />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import {ref, Ref, reactive} from 'vue';
import InfoBanner from 'components/InfoBanner.vue';
import GrantFilter from 'components/profile/GrantFilter.vue';
import {ExpenseFork} from 'components/profile/GrantFilter.vue';

const tab : Ref<string>= ref('generalInfo');

const eventTypes : Ref<string[]> = ref([]);
const expenseFork : ExpenseFork = reactive({
  from: 0,
  to: 0,
});
const regions : Ref<string[]> = ref([]);
const scales : Ref<string[]> = ref([]);
</script>

<style scoped>

</style>
