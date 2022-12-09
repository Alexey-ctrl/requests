<template>
  <header>
    <router-link class='nav-link' to='/projects'>Projects</router-link>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style scoped>
  header {
    height: 75px;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    background-color: darkkhaki;
  }

  .nav-link {
    margin-right: 0.5rem;
  }
</style>
