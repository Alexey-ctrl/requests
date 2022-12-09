<template>
  <div>
    <h3>Projects</h3>
    <div class='mt-2'><router-link to='/project/create'>Create project</router-link></div>
    <div class='mt-2' v-show='projects.length'>
      <table>
        <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for='project of projects' :key='project.id' @click='toProjectPage(project.id)'>
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
          <td><button @click.stop='onEditClick(project.id)'>Edit</button></td>
          <td><button @click.stop='deleteProject(project.id)'>Delete</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProjectsPage',
  computed: mapGetters(['projects']),
  methods: {
    ...mapActions(['getProjects', 'deleteProject']),
    toProjectPage(id) {
      this.$router.push('/project/' + id);
    },
    onEditClick(id) {
      this.$router.push('/project/edit/' + id);
    }
  },
  mounted() {
    this.getProjects();
  },
};
</script>

<style scoped>

</style>
