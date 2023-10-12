<script setup lang="ts">
import {ref} from 'vue'
import type {Ref} from 'vue'
import {useRoute, useRouter, onBeforeRouteUpdate, onBeforeRouteLeave} from 'vue-router'

const route = useRoute();
const router = useRouter();
const number: Ref<string | string[]> = ref(route.params.id);
const number2: Ref<string | undefined> = ref();
const save = () => {
  router.push({name: 'My', params: {id: number2.value}});
}

const leave = () => {
  router.push({name: 'Home'});
}

onBeforeRouteUpdate((to, from) => {
  if (to.params.id !== from.params.id) {
    number.value = to.params.id;
  }
})

onBeforeRouteLeave((to, from) => {
  if (number2.value !== undefined && number2.value !== from.params.id) {
    const answer = window.confirm('未儲存資料，確定離開嗎?')
    if (!answer) return false
  }
})
</script>

<template>
  <div>
    <div>{{ number }}</div>
    <input v-model="number2">
    <button class="button" @click="save()">save</button>
    <button class="button" @click="leave()">leave</button>
  </div>
</template>

<style scoped>

</style>