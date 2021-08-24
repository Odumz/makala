
<template>
    <h1 class="mb-6 text-3xl font-extrabold">Dashboard</h1>

    <p class="mb-6">Name in store is: {{ name }}</p>

    <p class="mb-6">I have {{ numberOfMovies }} movies in my store!</p>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import { useStore } from 'vuex'

    const store = useStore();

    const name = computed(() => {
        return store.state.user.name
    })

    // const numberOfMovies = computed(() => {
    //     return store.state.movies.moviecollection.length
    // })

    const numberOfMovies = computed(() => {
        return store.getters.getNumberOfMovies
    })
</script>