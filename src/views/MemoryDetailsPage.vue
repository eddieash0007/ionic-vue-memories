<template>
  <base-layout :pageTitle="loadedMemory ? loadedMemory.title : 'Loading...'" pageDefaultBackLink="/memories">
    <h2 v-if="!loadedMemory">Could not find a memory for the given id</h2>
    <memory-overview v-else :title="loadedMemory.title" :image="loadedMemory.image" :description="loadedMemory.description"></memory-overview>
  </base-layout>
</template>

<script>
import BaseLayout from '@/components/base/BaseLayout.vue';
import MemoryOverview from '../components/memories/MemoryOverview.vue';
export default {
  components: { BaseLayout, MemoryOverview },
  data(){
    return { 
      memoryId: this.$route.params.id,
    }
  },
  computed:{
    loadedMemory() {
      return this.$store.getters.memory(this.memoryId);
    }
  },
  // watch: {
  //   '$route'(currentRoute) {
  //     this.memoryId = currentRoute.params.id 
  //   }
  // }

}
</script>

