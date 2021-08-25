<template>
    <h2>{{ fullname.value }} | Logged in: {{ status.value }} | Loading state: {{ loadingState.value }} </h2>

    <button v-if="status.value" class="m-2 bg-yellow-700 px-4 py-2 rounded text-white" @click="onLogout">Logout</button>

    <form v-if="!status.value" @submit.prevent="onSubmit()">
        <label class="m-2">
            Email
            <input v-model="userForm.email" class=" ml-2 border p-2 rounded" type="email" />
        </label>
        <label class="m-2">
            Password
            <input v-model="userForm.password" class=" ml-2 border p-2 rounded" type="password" />
        </label>
        <button :disabled="loadingState.value" type="submit" class="m-2 bg-green-600 px-4 py-2 rounded text-white">{{ loadingState.value ? "Loading..." : "Submit" }}</button>
    </form>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import { login } from '../api'
    import { useStore } from 'vuex'
    import * as actionTypes from '../store/constants/actions'

    const store = useStore()

    const userForm = ref({
        email: "",
        password: ""
    })

    const fullname = computed(() => {
        return store.getters.getFullname
    })

    const status = computed(() => {
        return store.getters.getLoginStatus
    })

    const loadingState = computed(() => {
        return store.getters.getLoadingState
    })

    const onSubmit = () => {
        // console.log(userForm.value);
        store.dispatch(actionTypes.updateLoading, true)
        login()
        .then(data => store.dispatch(actionTypes.updateUserData, data))
        .finally(() => store.dispatch(actionTypes.updateLoading, false))
    }

    const onLogout = () => {
        store.dispatch(actionTypes.updateUserIsLoggedIn, false)
        localStorage.clear()
        location.reload()
    }
</script>

<style>

</style>