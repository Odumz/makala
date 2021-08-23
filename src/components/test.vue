<template>
    <div>
        <p>{{ name }}</p>
        <input ref="el" v-model="name" type="text" placeholder="Name" />
        <div>
            <button 
                :disabled="name.length ==0"
                @click="submitForm"
                >
                Submit
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

        const name = ref('')
        const el = ref()

        const submitForm = () => {
            console.log(`Form submitted! Thank you ${name.value}`);
        }

        onMounted(() => {
            el.value.focus()
        })

        // return {
        //     el,
        //     name,
        //     submitForm
        // }
</script>

<style scoped>
input[type='text'] {
    padding: 5px;
}

button {
    margin-top: 20px;
}
</style>