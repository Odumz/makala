<script>
import { sidebarWidth, collapsed, toggleSidebar } from './state'
import { Icon } from '@iconify/vue'
import sidebarLink from './sidebarLink.vue'

export default {
    components: { Icon, sidebarLink },
    props: {},
    setup() {
        return {
            sidebarWidth, collapsed, toggleSidebar
        }
    }
}
</script>

<template>
    <div class="sidebar" :style="{width: sidebarWidth}">
        <h1>
            <span v-if="collapsed">
                <div>V</div>
                <div>S</div>
            </span>
            <span v-else>Vue Sidebar</span>
        </h1>

        <sidebar-link to="/" icon="codicon:home">Home</sidebar-link>
        <sidebar-link to="/dashboard" icon="lucide:layout-dashboard">Dashboard</sidebar-link>
        <sidebar-link to="/movies" icon="tabler:presentation-analytics">Movies</sidebar-link>
        <sidebar-link to="/about" icon="clarity:id-badge-line">About</sidebar-link>
        <sidebar-link to="/login" icon="fluent:contact-card-20-regular">Login</sidebar-link>

        <span class="collapsed-icon" :class="{ 'rotate-180' : collapsed }" @click="toggleSidebar">
            <Icon icon="feather:menu" height="30" />
        </span>
    </div>
</template>

<style scoped>
    .sidebar {
        color: white;
        background-color: #2f855a;

        float: left;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        bottom: 0;
        padding: 0.5em;

        transition: 0.3s ease-in;

        display: flex;
        flex-direction: column;
    }

    .collapsed-icon {
        position: absolute;
        bottom: 0;
        padding: 0.75em;

        color: rgba(255, 255, 255, 0.7);

        transition: 0.2s linear;
    }

    .rotate-180 {
        transform: rotate(180deg);
        transition: 0.2s linear;
    }
</style>