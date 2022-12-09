<template>
  <div>
    <h3>Create project</h3>
    <div class='mt-2'>
      <label for='project-name'>Name</label>
    </div>
    <div class='mt-1'>
      <input id='project-name' type='text' v-model='projectName'>
    </div>
    <div class='mt-2'>
      <button @click='onCreateClick'>Create</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'CreateProjectPage',
  data: () => {
    return {
      projectName: ''
    }
  },
  methods: {
    ...mapActions(['createProject']),
    async onCreateClick() {
      await this.createProject(this.projectName);
      this.$router.push('/projects');
    }
  }
};
</script>

<style scoped>
</style>
