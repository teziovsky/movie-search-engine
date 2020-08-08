<template>
    <div id="app">
        <Navbar />
        <keep-alive>
            <router-view />
        </keep-alive>
        <Footer />
    </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
    name: "App",
    components: {
        Navbar,
        Footer,
    },
};
</script>

<style lang="scss">
</style>
