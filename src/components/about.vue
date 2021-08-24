<template>
    <h1 class="mb-6 text-2xl font-bold">About {{ name }}</h1>

    <p class="mb-6">You will see the following content when you're logged in.</p>

    <p v-if="status.value">Just a test paragraph...lol! </p>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import { useStore } from 'vuex'
    
    const store = useStore()

    const name = computed(() => {
        return store.state.user.name
    })

    const status = computed(() => {
        return store.getters.getLoginStatus
    })
</script>