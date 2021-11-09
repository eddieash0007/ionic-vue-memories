<template>
 <base-layout pageTitle="All Memories">
    <memories-list :memories="memories"></memories-list>
</base-layout>
</template>

<script>
import MemoriesList from '../components/memories/MemoriesList.vue'
import BaseLayout from '@/components/base/BaseLayout.vue'


export default {
    components: {
        BaseLayout,
        MemoriesList
    },
    computed: {
        memories() {
            return this.$store.getters.memories;
        }
    }

}
</script>

