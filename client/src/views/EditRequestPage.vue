<template>
  <div>
    <h3>Edit request: {{ request.name }}</h3>
    <div class='mt-2'><label for='request-name'>Name</label></div>
    <div class='mt-1'><input id='request-name' type='text' v-model='name'></div>

    <div class='mt-2'><label for='request-description'>Description</label></div>
    <div class='mt-1'><input id='request-description' type='text' v-model='description'></div>

    <div class='mt-2'>
      <button @click='onEditClick'>Edit</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'EditRequestPage',
  data() {
    return {
      name: '',
      description: '',
    };
  },
  computed: mapGetters(['request']),
  mounted() {
    this.getRequest(this.$route.params.id)
      .then(() => {
        if (!this.request) return this.$router.push('/project/' + this.$route.query.projectId);
      });
  },
  methods: {
    ...mapActions(['getRequest', 'editRequest']),
    async onEditClick() {
      await this.editRequest({ id: this.request.id, name: this.name, description: this.description });
      this.$router.push('/project/' + this.$route.query.projectId);
    },
  },
};
</script>

<style scoped>

</style>
