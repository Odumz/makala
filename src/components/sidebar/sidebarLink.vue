<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import  { collapsed } from './state'
import { Icon } from '@iconify/vue'

export default {
    components: { Icon },
    props: {
        to: { type: String, required: true},
        icon: { type: String, required: true},
    },
    setup(props) {
        const route = useRoute()
        const isActive = computed(() =>
            route.path === props.to
        )
        return {
            isActive, collapsed
        }
    }
}
</script>

<template>
    <router-link :to="to" class="link" :class="{ active : isActive }">
        <Icon :icon="icon" height="35" class="icon" />
        <transition name="fade">
            <span v-if="!collapsed">
                <slot />
            </span>        
        </transition>
    </router-link>
</template>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.1s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
    .link {
        display: flex;
        align-items: center;

        cursor: pointer;
        position: relative;
        font-weight: 400;
        user-select: none;

        margin: 0.1em 0;
        padding: 0.4em;
        border-radius: 0.25em;
        height: 1.5em;

        color: white;
        text-decoration: none;
    }

    .link:hover {
        background-color: rgba(56, 161, 105, 1);
    }

    .link:active {
        background-color: rgba(39, 103, 73, 1);
    }

    .link .icon {
        flex-shrink: 0;
        width: 25px;
        margin-right: 10px;
    }
</style>