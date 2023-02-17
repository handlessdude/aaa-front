<template>
  <q-item
    clickable
    class="drawer-item"
    exact
    active-class="drawer-item_active"
    tag="a"
    :to="{ name: routeName }"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-subtitle2">
        {{ title }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface EssentialLinkProps {
  title: string;
  icon?: string;
  routeName?: string;
}
defineProps<EssentialLinkProps>();
</script>
<style scoped lang="scss">
.drawer-item {
  line-height: 24px;
}

.drawer-item_active {
  background: linear-gradient(to right, transparent, transparent),
  linear-gradient(to right, #e0e0e0, #ffffff);
  transition: background-size 400ms;
}
</style>
