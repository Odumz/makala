export default {
    state: () => ({
        name: 'theme-swiss'
    }),

    getters: {},

    mutations: {
        SET_THEME_NAME(state, payload) {
            state.name = payload
        }
    },

    actions: {
        changeTheme({ commit }, data) {
            commit('SET_THEME_NAME', data)
        }
    },
}