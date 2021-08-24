<template>
    <div>
    <h1 class="mb-6 text-2xl font-bold">{{ name }}'s Movie Store</h1>

    <ul>
        <li v-for="movie in newmovies" :key="movie.id">
            {{ movie.title }}
            <button v-if="status.value" class="m-2 bg-red-600 px-4 py-2 rounded text-white" @click="onRemoveMovieClick(movie.id)">x</button>
        </li>
    </ul>

    <button v-if="status.value" class="m-2 bg-green-600 px-4 py-2 rounded text-white" @click="onAddMovieClick()">Add movie</button>
    </div>
</template>

<script setup>
    // import useMovieState from '../store/useMovieState'
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import * as actionTypes from '../store/constants/actions'

    const store = useStore()

    const name = computed(() => {
            return store.state.user.name
        })

    const status = computed(() => {
        return store.getters.getLoginStatus
    })

    const newmovies = computed(() => {
        if (store.getters.getLoginStatus.value) {
            // console.log("allMovies", store.state.movies.moviecollection);
            return store.state.movies.moviecollection
        }

        const movies = store.state.movies.moviecollection.filter(movie => movie.requiresLogin === false)
        // console.log("the movies", movies);
        return movies
    })

    const onAddMovieClick = () => {
        store.dispatch(actionTypes.addMovie, {
            id: store.getters.getNumberOfMovies.value + 1,
            title: `Movies ${store.getters.getNumberOfMovies.value + 1}`,
            requiresLogin: false
        })
    }

    const onRemoveMovieClick = (movieId) => {
        store.dispatch(actionTypes.removeMovie, movieId)
    }
</script>

<style>

</style>