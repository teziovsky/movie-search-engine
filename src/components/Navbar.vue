<template>
  <header class="site-header sticky top-0 z-30 border-b border-white/40 bg-white/65 backdrop-blur-xl">
    <nav class="mx-auto flex w-full max-w-[1180px] items-center justify-between px-4 py-3 md:px-6">
      <a
        class="rounded-full border border-white/50 bg-white/70 px-3 py-1.5 text-sm font-extrabold tracking-[0.2em] text-slate-800 transition hover:-translate-y-0.5"
        href="https://github.com/teziovsky/movie-search-engine"
        rel="noopener noreferrer"
        target="_blank"
      >
        CINEGLOSS
      </a>

      <div class="flex items-center gap-2 md:hidden">
        <button class="action-btn px-3 py-2 text-[11px]" type="button" @click="toggleTheme">
          {{ theme === 'dark' ? 'Light' : 'Dark' }}
        </button>
        <button
          :aria-expanded="mobileOpen"
          aria-controls="main-nav"
          class="action-btn px-3 py-2"
          type="button"
          @click="mobileOpen = !mobileOpen"
        >
          Menu
        </button>
      </div>

      <div class="hidden items-center gap-3 md:flex">
        <ul class="flex items-center gap-2 text-sm font-semibold">
          <li>
            <router-link class="nav-link" to="/">Discover</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/movies">Movies</router-link>
          </li>
        </ul>
        <button class="action-btn px-3 py-2 text-[11px]" type="button" @click="toggleTheme">
          {{ theme === 'dark' ? 'Light mode' : 'Dark mode' }}
        </button>
      </div>
    </nav>

    <div v-if="mobileOpen" id="main-nav" class="border-t border-white/60 bg-white/85 px-4 py-3 md:hidden">
      <ul class="space-y-2 text-sm font-semibold">
        <li>
          <router-link class="mobile-nav-link" to="/" @click="mobileOpen = false">Discover</router-link>
        </li>
        <li>
          <router-link class="mobile-nav-link" to="/movies" @click="mobileOpen = false">Movies</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

type Theme = 'light' | 'dark';

const mobileOpen = ref(false);
const theme = ref<Theme>('light');

const applyTheme = (nextTheme: Theme) => {
  theme.value = nextTheme;
  document.documentElement.classList.toggle('theme-dark', nextTheme === 'dark');
  localStorage.setItem('cinegloss-theme', nextTheme);
};

const toggleTheme = () => {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark');
};

onMounted(() => {
  const storedTheme = localStorage.getItem('cinegloss-theme');
  if (storedTheme === 'dark' || storedTheme === 'light') {
    applyTheme(storedTheme);
    return;
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
});
</script>

<style scoped>
.nav-link {
  border: 1px solid transparent;
  border-radius: 9999px;
  display: inline-flex;
  padding: 0.52rem 0.9rem;
  transition: border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.75);
  border-color: rgba(109, 137, 187, 0.28);
}

.nav-link.is-active {
  border-color: rgba(35, 93, 255, 0.36);
  background: rgba(35, 93, 255, 0.12);
  color: #2244ad;
}

.mobile-nav-link {
  border: 1px solid rgba(117, 141, 183, 0.26);
  border-radius: 0.8rem;
  background: rgba(255, 255, 255, 0.8);
  display: block;
  padding: 0.58rem 0.8rem;
}

.mobile-nav-link.is-active {
  border-color: rgba(35, 93, 255, 0.42);
  background: rgba(35, 93, 255, 0.13);
  color: #2244ad;
}

:global(html.theme-dark) .nav-link {
  color: #d6e2ff;
}

:global(html.theme-dark) .nav-link:hover {
  background: rgba(34, 48, 79, 0.86);
  border-color: rgba(109, 141, 204, 0.4);
}

:global(html.theme-dark) .nav-link.is-active {
  border-color: rgba(132, 168, 255, 0.48);
  background: rgba(77, 119, 235, 0.25);
  color: #e7eeff;
}

:global(html.theme-dark) .mobile-nav-link {
  border-color: rgba(99, 126, 185, 0.45);
  background: rgba(24, 35, 61, 0.9);
  color: #d6e2ff;
}

:global(html.theme-dark) .mobile-nav-link.is-active {
  border-color: rgba(132, 168, 255, 0.58);
  background: rgba(77, 119, 235, 0.32);
  color: #f0f4ff;
}
</style>
