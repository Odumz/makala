<template>
    <div id="temp" :class="[darkClass, newTheme]">
        <alert class="info mb-3" name="modern-badge">
            <template #icon><svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg></template>
            <template #title>Holy smokes! </template>
            <template #text>Something seriously bad happened. </template>
        </alert>
        <h1 class="pt-6 pb-8 text-3xl">Themes</h1>
        <div class="md:grid md:grid-cols-2 md:gap-10 mx-16">
            <site-theme class="mb-3" name="dark" :mode=mode @toggle="toggle" ><template #before>Light </template><template #after> Dark</template></site-theme>
            <siteTheme class="my-3" @default="defaultTheme" @swiss="swissTheme" @neon="neonTheme" />
        </div>
        <blog class="flex justify-center" name="footer" />
        <picture />
        <Icon icon="mdi-light:home" height="40" color="text-skin-base" />
        <pagination />
    </div>
</template>

<script>
    import { ref, reactive, computed } from 'vue'
    import { useStore } from 'vuex'

    import siteTheme from '../components/themeSwitch.vue'
    import picture from '../components/image.vue'
    import alert from '../components/alert.vue'
    import blog from '../components/blog.vue'
    import pagination from '../components/pagination.vue'

    const store = useStore();

    const theme = computed(() => {
        return store.state.theme.name
    })

    const newTheme = ref('')

    function changeTheme() {
        store.dispatch('changeTheme', newTheme.value)
    }

    const keyPress = (e) => {
        if (e.key === 'd') {
            this.toggle()
        } else if (e.key === 's') {
            newTheme = 'theme-swiss'
        } else if (e.key === 'n') {
            newTheme = 'theme-neon'
        } else if (e.key === 'r') {
            newTheme = 'theme-default'
        }
    }
    const toggle = () => {
        if (this.mode === "dark") {
            this.mode = "light"
            this.darkClass = ''
        } else {
            this.mode = "dark"
            this.darkClass = 'dark'
        }
    }
    const defaultTheme = () => {
        this.theme = 'theme-default'
    }
    const swissTheme = () => {
        this.theme = 'theme-swiss'
    }
    const neonTheme = () => {
        this.theme = 'theme-neon'
    }
</script>

<style scoped>

</style>