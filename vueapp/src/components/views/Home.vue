<script setup lang="ts">
import {ref} from 'vue'
import type {Ref} from 'vue'
import {useRouter, onBeforeRouteLeave} from 'vue-router'

const router = useRouter();

const number: Ref<number | undefined> = ref();
const go = () => {
  router.push({name: 'My', params: {id: number.value}});
}

onBeforeRouteLeave((to, from) => {
  const answer = window.confirm('確定送出嗎?');
  if (!answer) {
    return false
  }
})
</script>

<template>
  <div>
  <input v-model="number">
  <button class="button" @click="go()">submit</button>
  </div>
</template>

<style scoped>
.button {
  width: 50px;
  height: 20px;
}
</style>