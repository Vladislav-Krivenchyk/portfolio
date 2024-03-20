<template>
    <transition name="preload-fade">
        <preload v-if="showPreload" />
    <div v-else class="app-container">
        <header-component />
        <router-view />
        <footer-component />
    </div>
    </transition>
</template>

<script>
import HeaderComponent from "../src/components/layout/HeaderComponent.vue";
import FooterComponent from "../src/components/layout/FooterComponent.vue";
import Preload from "../src/components/Preload.vue";

export default {
    components: { Preload, FooterComponent, HeaderComponent },
    data() {
        return {
            showPreload: true
        };
    },
    created() {
        const hasReloaded = sessionStorage.getItem("hasReloaded");
        if (hasReloaded) {
            this.showPreload = false;
        }

        window.onbeforeunload = () => {
            sessionStorage.setItem("hasReloaded", "true");
        };

        setTimeout(() => {
            this.showPreload = false;
        }, 2000);
    }
};
</script>

<style>
.preload-fade-enter-active,
.preload-fade-leave-active {
    transition: opacity 1s, transform 1s;
}

.preload-fade-enter, .preload-fade-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}
</style>
