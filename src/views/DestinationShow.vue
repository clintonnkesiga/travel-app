<template>
  <section v-if="destination" class="destination">
    <h2 class="" style="text-align: left">{{ destination.name }}</h2>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<script>

import sourceData from '@/data.json'
export default {
  name: "DestinationShow",

  data() {
    return {
      destination: null
    }
  },
  computed: {

    destinationId() {
      return parseInt(this.$route.params.id)
    },

    // destination() {
    //   return sourceData.destinations.find(destination => destination.id === this.destinationId)
    // }
  },
  methods: {
    async initData() {
      const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
      this.destination = await response.json()
    }
  },
  created() {
    this.initData();
    //Refresh the created hook to display new data
    this.$watch(() => this.$route.params, this.initData)
  }
}
</script>

<style scoped>

</style>