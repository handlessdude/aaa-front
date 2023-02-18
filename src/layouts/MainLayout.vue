<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      class="gradient"
    >
      <q-toolbar
        class="q-pa-sm row justify-between">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
         {{ route.name }}
        </q-toolbar-title>
        <q-input
          v-model="query"
          outlined
          dense
          color="grey-8"
          bg-color="white"
          label="Search..."
          debounce="300"
          class="q-mr-md"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      behavior="desktop"
    >
      <q-list>
        <q-item-label header class="text-h6 text-weight-light">
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, Ref, watch } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { essentialLinks } from 'layouts/resources';
import {useRoute} from 'vue-router'
const route = useRoute();

const query : Ref<string> = ref('');
watch( () => query.value, (newQuery) => {
  if(!newQuery) return;
  console.log(newQuery);
})

const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
<style lang="scss">
.gradient {
  background: linear-gradient(to right, transparent, transparent),
  linear-gradient(to right,#534e91, #484276, #435171);
}
</style>
