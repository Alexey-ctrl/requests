<template>
  <div>
    <div>Id: {{ request.id }}</div>
    <div>Name: {{ request.name }}</div>
    <div>Description: {{ request.description }}</div>
    <div>Status: {{ currentStatus.name }}</div>
    <div v-if='prevStatuses.length'>
      <div>Prev status:</div>
      <div v-for='status of prevStatuses' :key='status.id'>
        <button @click='setPrevStatus({requestId: request.id, statusId: status.id})'>{{ status.name }}</button>
      </div>
    </div>
    <div v-if='nextStatuses.length'>
      <div>Next status:</div>
      <div v-for='status of nextStatuses' :key='status.id'>
        <button @click='setNextStatus({requestId: request.id, statusId: status.id})'>{{ status.name }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'RequestPage',
  computed: mapGetters(['request', 'statuses', 'currentStatus', 'nextStatuses', 'prevStatuses']),
  mounted() {
    this.getStatuses()
      .then(() => {
        this.getRequest(this.$route.params.id)
          .then(() => {
            if (!this.request) this.$router.push('/project/' + this.$route.query.projectId);
          });
      });
  },
  methods: {
    ...mapActions(['getRequest', 'getStatuses', 'setNextStatus', 'setPrevStatus']),
  },
};
</script>

<style scoped>

</style>
