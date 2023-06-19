<template>
  <div class="home">
    <h1 class>All Destinations</h1>
    <span>You can view all available destinations here</span>
    <div class="destinations">
      <router-link
          v-for="destination in destinations"
          :key="destination.id"
          :to="{name: 'destination.show', params:{id: destination.id}}"
      >
        <h2 class="">{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name">
      </router-link>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'
export  default {
  data(){
    return {
      destinations: sourceData.destinations
    }
  }
}
</script>