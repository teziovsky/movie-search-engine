<template>
  <footer class="copyright">
    © 2020 Copyright:
    <a href="https://linkedin.com/in/jakubsoboczynski/" rel="noopener noreferrer" target="_blank">
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
  margin-top: 20px;
  padding: 15px 0;
  text-align: center;
  border-top: 1px solid #DADBDD;
  background-color: #F8F9FA;
}

a {
  font-weight: 600;
  transition: border-bottom 0.3s ease;
  color: #212529;
  border-bottom: 1px solid transparent;

  &:hover {
    text-decoration: none;
    border-bottom: 1px solid #212529;
  }
}
</style>
