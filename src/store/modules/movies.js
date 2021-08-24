import { computed } from 'vue'

export default {
    state: () => ({
        moviecollection: [
            {
                id: 1,
                title: "Movie 1"
            },
            {
                id: 2,
                title: "Movie 2"
            },
            {
                id: 3,
                title: "Movie 3"
            },
            {
                id: 4,
                title: "Movie 4"
            },
        ]
    }),

    getters: {
        getNumberOfMovies: (state) => {
            return computed(() => {
                return state.moviecollection.length
            })
        }
    },

    actions: {}
}