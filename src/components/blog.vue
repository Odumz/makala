<template>
    <div v-if="name == 'footer'">
        <div class="max-w-sm w-2/3 lg:max-w-full lg:flex">
            <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://res.cloudinary.com/griffintech/image/upload/v1591143905/samples/bike.jpg')" title="Woman holding a mug">
            </div>
            <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                <p class="text-sm dark:text-skin-base text-gray-600 flex items-center my-3">
                    <svg class="fill-current dark:text-skin-base text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                </p>
                <div class="text-gray-900 dark:text-skin-muted font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                <p class="dark:text-skin-base text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div class="xs:flex xs:justify-between grid grid-cols-1 gap-6 space-x-20">
                    <div class="flex items-center">
                        <img class="w-10 h-10 rounded-full mr-4" src="https://res.cloudinary.com/griffintech/image/upload/v1591143903/samples/people/smiling-man.jpg" alt="Avatar of Jonathan Reinink">
                        <div class="text-sm">
                            <p class="text-gray-900 dark:text-skin-muted leading-none">Jonathan Reinink</p>
                            <p class="text-gray-600 dark:text-skin-muted">Aug 18</p>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <p class="text-gray-900 dark:text-skin-muted leading-none">Jonathan Reinink</p>
                        <svg class="fill-current mx-3 dark:text-skin-base text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                    </div>

                </div>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
    }
}
</script>