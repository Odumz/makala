import { reactive, readonly } from 'vue'

const defaultState = {
    movies: [
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
}

const state = reactive(defaultState)

const getters = {}

const actions = {}

export default () => ({
    state: readonly(state),
    ...getters,
    ...actions
})