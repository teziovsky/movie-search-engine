<template>
  <footer class="copyright">
    © 2020 Copyright:
    <a href="https://linkedin.com/in/jakubsoboczynski/" target="_blank" rel="noopener noreferrer">
      Jakub Soboczyński
    </a>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.copyright {
  padding: 15px 0;
  background-color: #f8f9fa;
  border-top: 1px solid #dadbdd;
  margin-top: 20px;
  text-align: center;
}

a {
  color: #212529;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.3s ease;
  font-weight: 600;
  &:hover {
    text-decoration: none;
    border-bottom: 1px solid #212529;
  }
}
</style>
