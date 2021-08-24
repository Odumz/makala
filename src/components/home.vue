
<template>
    <h1 class="mb-6 text-3xl font-extrabold">Home</h1>

    <p class="mb-6">Name in store is: {{ name }}</p>

    <input v-model="newName" type="text" class="p-2 border rounded border-gray-600" />

    <button class="ml-3 p-2 text-white bg-indigo-600 rounded" @click="saveName">Submit</button>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'
    import * as actionTypes from '../store/constants/actions'

    const store = useStore();
    const router = useRouter()

    const name = computed(() => {
        return store.state.user.name
    })

    const newName = ref('')

    function saveName() {
        store.dispatch(actionTypes.saveName, newName.value)
        newName.value = ''
        // router.push('/about')
    }
</script>