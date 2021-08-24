<template>
<h1 class="mb-6 text-2xl font-bold">{{ name }} Movie Store</h1>
  <ul>
      <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
  </ul>
</template>

<script setup>
// import useMovieState from '../store/useMovieState'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const name = computed(() => {
        return store.state.user.name
    })

const movies = computed(() => {
        return store.state.movies.moviecollection
    })
</script>

<style>

</style>