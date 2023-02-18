<template>
  <q-card>
    <q-card-section>
      <label class="text-h6">{{ grant.name }}</label>
    </q-card-section>
    <q-separator class="q-my-sm"/>
    <div class="q-col-gutter-md grid-container q-pa-md">
      <div class="row q-col-gutter-md items-center">
        <div class="text-h7"><q-icon name="category"/> Type</div>
        <div class="text-grey-8">{{ grant.type }}</div>
      </div>

      <div class="row q-col-gutter-md items-center">
        <div class="text-h7"><q-icon name="attach_money"/> Amount</div>
        <div class="text-grey-8">{{ grant.amount }}</div>
      </div>

      <div class="row q-col-gutter-md items-center">
        <div class="text-h7"><q-icon name="public"/> Region</div>
        <div class="text-grey-8">{{ grant.region }}</div>
      </div>

      <div class="row q-col-gutter-md items-center">
        <div class="text-h7"><q-icon name="emoji_transportation"/> Scale</div>
        <div class="text-grey-8">{{ grant.scale }}</div>
      </div>
    </div>
  </q-card>
</template>

<script setup lang="ts">

import {Grant} from 'src/models/grant-models';

interface GrantCardProps {
  grant: Grant
}

defineProps<GrantCardProps>();
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
