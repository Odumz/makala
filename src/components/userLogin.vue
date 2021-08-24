<template>
<h2>{{ fullname }}</h2>
    <form @submit.prevent="onSubmit()">
        <label class="m-2">
            Email
            <input v-model="userForm.email" class=" ml-2 border p-2 rounded" type="email" />
        </label>
        <label class="m-2">
            Password
            <input v-model="userForm.password" class=" ml-2 border p-2 rounded" type="password" />
        </label>
        <button type="submit" class="m-2 bg-green-600 px-4 py-2 rounded text-white">Submit</button>
    </form>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import { login } from '../api'
    import { useStore } from 'vuex'

    const store = useStore()

    const userForm = ref({
        email: "",
        password: ""
    })

    const fullname = computed(() => {
        return store.getters.getFullname
    })

    const onSubmit = () => {
        // console.log(userForm.value);
        login().then(data => store.dispatch('updateUserData', data))
    }
</script>

<style>

</style>