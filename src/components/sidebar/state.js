import { ref, computed } from 'vue'

export const collapsed = ref(false)
export const toggleSidebar = () => { collapsed.value = !collapsed.value }

export const sidebar_Width = 180
export const sidebar_Width_Collapsed = 60

export const sidebarWidth = computed(
    () => `${collapsed.value ? sidebar_Width_Collapsed : sidebar_Width}px`
)