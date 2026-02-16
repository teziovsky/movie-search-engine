<template>
  <nav aria-label="Page navigation" class="mt-8">
    <ul class="mx-auto flex w-fit items-center gap-3 text-sm">
      <li>
        <button
          :disabled="page <= 1"
          class="action-btn px-3 py-2"
          type="button"
          @click="$emit('prev')"
        >
          Previous
        </button>
      </li>
      <li
        class="surface-tint min-w-30 px-3 py-2 text-center text-sm font-semibold text-slate-700"
      >
        {{ page }} / {{ lastPage ?? 1 }}
      </li>
      <li>
        <button
          :disabled="lastPage === null || page >= lastPage"
          class="action-btn px-3 py-2"
          type="button"
          @click="$emit('next')"
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  page: number;
  lastPage: number | null;
}>();

defineEmits<{
  prev: [];
  next: [];
}>();
</script>
