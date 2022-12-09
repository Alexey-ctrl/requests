<template>
  <div>
    <h3>Edit project: {{project?.name}}</h3>
    <div class='mt-2'>
      <label for='project-name'>Name</label>
    </div>
    <div class='mt-1'>
      <input id='project-name' type='text' v-model='projectName'>
    </div>
    <div class='mt-2'>
      <button @click='onEditClick'>Edit</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'EditProjectPage',
  computed: mapGetters(['project']),
  data() {
    return {
      projectName: ''
    }
  },
  mounted() {
    this.getProjectById(this.$route.params.id)
      .then(() => {
        if (!this.project) this.$router.push('/projects');
      });
  },
  methods: {
    ...mapActions(['editProject', 'getProjectById']),
    async onEditClick() {
      await this.editProject({ id: this.project.id, name: this.projectName });
      this.$router.push('/projects');
    }
  }
};
</script>

<style scoped>

</style>
