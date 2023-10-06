<template>
  <div class="post">
    <div v-if="loading" class="loading">
      Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationvue">https://aka.ms/jspsintegrationvue</a>
      for more details.
    </div>

    <div v-if="post" class="content">
      <table>
        <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (C)</th>
          <th>Temp. (F)</th>
          <th>Summary</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="forecast in post" :key="forecast.date">
          <td>{{ forecast.date }}</td>
          <td>{{ forecast.temperatureC }}</td>
          <td>{{ forecast.temperatureF }}</td>
          <td>{{ forecast.summary }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import type {Ref} from 'vue';
import {onMounted, ref} from 'vue';

type Forecasts = {
  date: string,
  temperatureC: number,
  temperatureF: number,
  summary: string
}[];

const loading: Ref<boolean> = ref(false);
const post: Ref<Forecasts | null> = ref(null);
const fetchData = async () => {
  post.value = null;
  loading.value = true;
  try {
    const response = await fetch('api/WeatherForecast/GetWeatherForecast');
    post.value = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>