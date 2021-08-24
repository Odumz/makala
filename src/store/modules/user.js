import { computed } from 'vue'
import * as mutationTypes from '../constants/mutations'
import * as actionTypes from '../constants/actions'

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
        [mutationTypes.SET_NAME](state, payload) {
            state.name = payload
        },
        [mutationTypes.SET_OTHER_NAMES](state, { firstname, lastname }) {
            state.firstname = firstname
            state.lastname = lastname
        },
        [mutationTypes.SET_LOGGEDIN_STATUS](state, payload) {
            state.isLoggedIn = payload
        }
    },

    actions: {
        [actionTypes.saveName]({ commit }, data) {
            commit('SET_NAME', data)
        },
        async [actionTypes.updateUserData]({ dispatch, commit }, data) {
            await commit('SET_OTHER_NAMES', data)
            await dispatch('updateUserIsLoggedIn', true)
            // await commit('SET_LOGGEDIN_STATUS', true)
        },
        [actionTypes.updateUserIsLoggedIn]({ commit }, data) {
            commit('SET_LOGGEDIN_STATUS', data)
        }
    },
}