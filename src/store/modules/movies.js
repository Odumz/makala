import { computed } from 'vue'
import * as actionTypes from '../constants/actions'
import * as mutationTypes from '../constants/mutations'

export default {
    state: () => ({
        moviecollection: [
            {
                id: 1,
                title: "Movie 1",
                requiresLogin: false
            },
            {
                id: 2,
                title: "Movie 2",
                requiresLogin: true
            },
            {
                id: 3,
                title: "Movie 3",
                requiresLogin: false
            },
            {
                id: 4,
                title: "Movie 4",
                requiresLogin: true
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

    mutations: {
        [mutationTypes.ADD_MOVIE](state, payload) {
            state.moviecollection.push(payload)
        },
        [mutationTypes.REMOVE_MOVIE](state, payload) {
            const movieIndex = state.moviecollection.findIndex((movie) => movie.id === payload)
            state.moviecollection.splice(movieIndex, 1)
        },
    },

    actions: {
        async [actionTypes.addMovie]({ commit }, data) {
            await commit(mutationTypes.ADD_MOVIE, data)
        },
        async [actionTypes.removeMovie]({ commit }, data) {
            await commit(mutationTypes.REMOVE_MOVIE, data)
        }
    }
}