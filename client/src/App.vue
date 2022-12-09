<template>
  <div>
    <header-component></header-component>
    <div class='container'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent';

export default {
  name: 'App',
  components: {HeaderComponent},

}
</script>

<style>
body, h3 {
  padding: 0;
  margin: 0;
}

table {
  border-collapse: collapse;
}

td, th {
  padding: 10px 10px;
}

tr {
  border: 1px solid black;
}

tbody > tr {
  cursor: pointer;

}
tbody > tr:hover {
  background-color: #f5f5f5;
}

.container {
  padding: 1rem 2rem;
}

.mt-1 {
  margin-top: 0.5rem;
}

.mt-2 {
  margin-top: 1rem;
}
</style>
