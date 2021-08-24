import { createStore } from 'vuex'

import user from './modules/user'
import movies from './modules/movies'
import theme from './modules/theme'

const store = createStore({
    modules: {
        user,
        movies,
        theme
    }
})

export default store