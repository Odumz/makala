import { computed } from 'vue'

export default {
    state: () => ({
        name: 'Buster',
        firstname: '',
        lastname: '',
        isLoggedIn: false
    }),

    getters: {
        getFullname: (state) => {
            return computed(() => {
                return `${state.firstname} ${state.lastname}`
            })
        },
        getLoginStatus: (state) => {
            return computed(() => {
                return state.isLoggedIn
            })
        }
    },

    mutations: {
        SET_NAME(state, payload) {
            state.name = payload
        },
        SET_OTHER_NAMES(state, { firstname, lastname }) {
            state.firstname = firstname
            state.lastname = lastname
        },
        SET_LOGGEDIN_STATUS(state, payload) {
            state.isLoggedIn = payload
        }
    },

    actions: {
        saveName({ commit }, data) {
            commit('SET_NAME', data)
        },
        async updateUserData({ dispatch, commit }, data) {
            await commit('SET_OTHER_NAMES', data)
            await dispatch('updateUserIsLoggedIn', true)
            // await commit('SET_LOGGEDIN_STATUS', true)
        },
        updateUserIsLoggedIn({ commit }, data) {
            commit('SET_LOGGEDIN_STATUS', data)
        }
    },
}