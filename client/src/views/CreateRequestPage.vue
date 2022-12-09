<template>
  <div>
    <h3>Create request</h3>
    <div class='mt-2'><label for='request-name'>Name</label></div>
    <div class='mt-1'><input id='request-name' type='text' v-model='name'></div>

    <div class='mt-2'><label for='request-description'>Description</label></div>
    <div class='mt-1'><input id='request-description' type='text' v-model='description'></div>

    <div class='mt-2'><label for='request-status'>Status</label></div>
    <div class='mt-1'>
      <select id='request-status' v-model='status'>
        <option v-for='status of statuses' :key='status.id' :value='status.id'>
          {{ status.name }}
        </option>
      </select>
    </div>

    <div class='mt-2'>
      <button @click='onCreateClick'>Create</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CreateRequestPage',
  computed: mapGetters(['statuses']),
  data() {
    return {
      name: '',
      description: '',
      status: null
    }
  },
  mounted() {
    this.getStatuses()
      .then(() => this.status = this.statuses[0].id);
  },
  methods: {
    ...mapActions(['getStatuses', 'createRequest']),
    async onCreateClick() {
      await this.createRequest({
        name: this.name,
        description: this.description,
        statusId: this.status,
      });
      this.$router.push('/project/' + this.$route.query.project);
    }
  },
};
</script>

<style scoped>

</style>
