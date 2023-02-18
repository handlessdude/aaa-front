<template>
  <q-stepper
    v-model="step"
    header-nav
    ref="stepper"
    color="teal"
    animated
    class="fill-profile-step"
  >
    <q-step
      :name="0"
      title="General info"
      icon="settings"
      :done="done[0]"
      active-color="teal"
    >
      <info-banner icon="help">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </info-banner>
      <q-card-section class="q-gutter-md no-padding q-mt-lg">
        <div class="row">
          <q-input
            class="col-10"
            outlined v-model="projectForm.title"
            label="Project title *"
            hint="Enter project title"
            :rules="[value => value.length || 'Field required']">
            <template v-slot:prepend>
              <q-icon name="edit" />
            </template>
          </q-input>
          <div class="col">
            <q-icon name="help" color="grey" size="lg" class="q-ml-md clickable">
              <q-tooltip class="text-body2 clickable">
                Sample tooltip
              </q-tooltip>
            </q-icon>
          </div>
        </div>
        <div class="row">
          <q-input
            class="col-10"
            outlined
            v-model="projectForm.description"
            type="textarea"
            label="Project description *"
            hint="Enter project description"
            :rules="[value => value.length || 'Field required']">
            <template v-slot:prepend>
              <q-icon name="edit" />
            </template>
          </q-input>
          <div class="col">
            <q-icon name="help" color="grey" size="lg" class="q-ml-md clickable">
              <q-tooltip class="text-body2">
                Sample tooltip
              </q-tooltip>
            </q-icon>
          </div>
        </div>

      </q-card-section>
      <q-stepper-navigation>
        <q-btn @click="goForward(0)" color="teal" label="Continue" />
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="1"
      title="Team"
      icon="create_new_folder"
      :done="done[1]"
      active-color="teal"
    >
      <info-banner icon="help">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </info-banner>
      <q-stepper-navigation>
        <q-btn @click="goForward(1)" color="teal" label="Continue" />
        <q-btn flat @click="goBackward(1)" color="teal" label="Back" class="q-ml-sm" />
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="2"
      title="Expenses"
      icon="add_comment"
      :done="done[2]"
      active-color="teal"
    >
      <info-banner icon="help">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </info-banner>
      <q-stepper-navigation>
<!--        <q-btn color="teal" @click="goForward(2)" label="Finish" />-->
        <q-btn flat @click="goBackward(2)" color="teal" label="Back" class="q-ml-sm" />
      </q-stepper-navigation>
    </q-step>
  </q-stepper>
</template>

<script setup lang="ts">
import {reactive, ref, Ref, watch} from 'vue';
import {repeat} from 'ts-list-comprehension';
import InfoBanner from 'components/InfoBanner.vue';
const emit = defineEmits(['finished'])
const step = ref(0);
const done : Ref<boolean[]>= ref(repeat(false)(3));
const projectForm = reactive({
  title: '',
  description: '',
});
const goForward = (stepIdx : number) => {
  done.value[stepIdx] = true;
  step.value = stepIdx + 1;
};
const goBackward = (stepIdx : number) => {
  step.value = stepIdx - 1;
};
watch( () => done.value, (newDone : boolean[]) => {
  const allDone = newDone.reduce((previousValue, currentValue) => (previousValue && currentValue), true);
  if (allDone) emit('finished');
}, {
  deep: true
})
</script>

<style scoped lang="scss">
.fill-profile-step {
  min-width: 300px;
}
.clickable {
  cursor: pointer;
}
</style>
