<template>
  <q-page padding class="column items-start">
    <div
      v-if="grantsLoading"
      class="flex flex-center"
    >
      <q-spinner-dots size="40px" color="primary"/>
    </div>
    <q-list
      v-else
      class="full-width q-mt-md">
      <grant-card
        v-for="grant in grants"
        :key="grant.id"
        :grant="grant"
        class="q-mb-md"
      />
    </q-list>
  </q-page >
</template>

<script setup lang="ts">
import {onMounted, ref, Ref} from 'vue';
import GrantCard from 'components/grants/GrantCard.vue';
import {Grant} from 'src/models/grant-models';
import {grantService} from 'src/services/grant-service';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const grantsLoading = ref(false)
const grants : Ref<Grant[]>= ref([]);

const loadGrants = async () => {
  grantsLoading.value = true;
  try {
    grants.value = await grantService.getGrants1();
    // grants.value = [
    //   {
    //     'id': 1,
    //     'name': 'Grant 1',
    //     'type': 'Type A',
    //     'amount': 10000,
    //     'region': 'Region 1',
    //     'scale': 'Small'
    //   },
    //   {
    //     'id': 2,
    //     'name': 'Grant 2',
    //     'type': 'Type B',
    //     'amount': 20000,
    //     'region': 'Region 2',
    //     'scale': 'Medium'
    //   },
    //   {
    //     'id': 4,
    //     'name': 'Grant 4',
    //     'type': 'Type A',
    //     'amount': 15000,
    //     'region': 'Region 1',
    //     'scale': 'Medium'
    //   }
    // ];
  } catch (error) {
    console.log(error);
    $q.notify({
      message: 'Grants loading error',
      type: 'negative',
    });
  } finally {
    grantsLoading.value = false;
  }
}
onMounted(loadGrants);
</script>

<style scoped>

</style>
