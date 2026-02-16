<template>
  <div class="app-shell flex min-h-screen flex-col">
    <Navbar />
    <main class="flex-1">
      <transition appear mode="out-in" name="fade">
        <router-view />
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
</script>
