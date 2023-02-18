<template>
  <q-form class="q-gutter-md">
    <q-select
      v-model="eventTypes"
      clearable
      multiple
      :options="eventTypeOptions"
      use-chips
      stack-label
      label="Event type"
    >
      <template v-slot:prepend>
        <q-icon name="category" />
      </template>
    </q-select>

    <div class="column">
      <div class="text-caption text-grey-8">Expense fork</div>
      <div class="row no-wrap justify-between grid-container">
        <q-input
          v-model.number="expenseFork.from"
          type="number"
          label="From"
        >
          <template v-slot:prepend>
            <q-icon :color="$q.dark.mode ? 'secondary' : 'primary'" name="attach_money"/>
          </template>
        </q-input>

        <q-input
          v-model.number="expenseFork.to"
          type="number"
          label="To"
        >
          <template v-slot:prepend>
            <q-icon :color="$q.dark.mode ? 'secondary' : 'primary'" name="attach_money"/>
          </template>
        </q-input>
      </div>
    </div>

    <q-select
      v-model="regions"
      clearable
      multiple
      :options="regionOptions"
      use-chips
      stack-label
      label="Region"
    >
      <template v-slot:prepend>
        <q-icon name="public" />
      </template>
    </q-select>

    <q-select
      v-model="scales"
      clearable
      multiple
      :options="scaleOptions"
      use-chips
      stack-label
      label="Scale"
    >
      <template v-slot:prepend>
        <q-icon name="emoji_transportation" />
      </template>
    </q-select>
  </q-form>
</template>

<script setup lang="ts">
import {computed} from 'vue';

export interface ExpenseFork {
  from: number;
  to: number;
}
interface GrantFilterProps {
  eventTypes : string[];
  expenseFork : ExpenseFork;
  regions : string[];
  scales : string[];
}

const props = defineProps<GrantFilterProps>();
const emit = defineEmits([
  'update:eventTypes',
  'update:expenseFork',
  'update:regions',
  'update:scales',
]);

export type Nullable<T> = T | null;

const eventTypes = computed({
  get: () => props.eventTypes,
  set: (value: Nullable<string[]>) => emit('update:eventTypes', value),
});
const expenseFork = computed({
  get: () => props.expenseFork,
  set: (value: ExpenseFork) => emit('update:expenseFork', value),
});
const regions = computed({
  get: () => props.regions,
  set: (value: Nullable<string[]>) => emit('update:regions', value),
});
const scales = computed({
  get: () => props.scales,
  set: (value: Nullable<string[]>) => emit('update:scales', value),
});

const eventTypeOptions = [
  'type1','type2', 'type3','type4'
]
const regionOptions = [
  'type1','type2', 'type3','type4'
]
const scaleOptions = [
  'type1','type2', 'type3','type4'
]
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
