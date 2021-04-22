<template>
  <nav aria-label="Page navigation" class="mt-4">
    <ul class="pagination justify-content-center">
      <li :class="page === 1 ? 'disabled' : ''" class="page-item">
        <a class="page-link" @click="prevPage">Previous</a>
      </li>
      <li class="page-link" style="background-color: inherit">
        {{ page }} of {{ lastPage == null ? 1 : lastPage }}
      </li>
      <li :class="page === lastPage || lastPage === null ? 'disabled' : ''" class="page-item">
        <a class="page-link" @click="nextPage">Next</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ['page', 'lastPage', 'prevPage', 'nextPage'],
  name: 'Pagination',
};
</script>
<style lang="scss" scoped>
a:hover {
  cursor: pointer;
}

button {
  filter: invert(100%);
}

.page-link {
  color: #212529;
}
</style>
