<template>
    <h1 class="mb-6 text-2xl font-bold">About {{ name }}</h1>

    <p class="mb-6">Name in store is:</p>

    <input v-model="newName" type="text" class="p-2 border rounded border-gray-600" />

    <button class="p-2 text-white bg-indigo-600 rounded" @click="saveName">Submit</button>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import { useStore } from 'vuex'
    
    const store = useStore()

    const name = computed(() => {
        return store.state.user.name
    })
</script>