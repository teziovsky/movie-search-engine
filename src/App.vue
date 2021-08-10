<template>
  <div id="app">
    <Navbar />
    <transition appear mode="out-in" name="fade">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-in-out;
  opacity: 0;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
