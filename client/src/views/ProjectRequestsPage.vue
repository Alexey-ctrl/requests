<template>
  <div>
    <h3>Project: {{ project?.name }}</h3>
    <div class='mt-2'>
      <router-link :to='`/request/create?project=${project?.id}`'>Create request</router-link>
    </div>
    <div class='mt-2' v-show='projectRequests.length'>
      <div>Project requests</div>
      <table class='mt-1'>
        <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>status</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for='request of projectRequests' :key='request.id' @click='onRequestClick(request.id)'>
          <td>{{ request.id }}</td>
          <td>{{ request.name }}</td>
          <td>{{ request.status.name }}</td>
          <td>
            <button @click.stop='unbindRequest({requestId: request.id, projectId: project.id})'>Unbind</button>
          </td>
          <td>
            <button @click.stop='onEditClick(request.id)'>Edit</button>
          </td>
          <td>
            <button @click.stop='deleteRequest(request.id)'>Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class='mt-2' v-show='unboundedRequests.length'>
      <div>Unbounded requests</div>
      <table class='mt-1'>
        <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>status</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for='request of unboundedRequests' :key='request.id' @click='onRequestClick(request.id)'>
          <td>{{ request.id }}</td>
          <td>{{ request.name }}</td>
          <td>{{ request.status.name }}</td>
          <td>
            <button @click.stop='bindRequest({requestId: request.id, projectId: project.id})'>Bind</button>
          </td>
          <td>
            <button @click.stop='onEditClick(request.id)'>Edit</button>
          </td>
          <td>
            <button @click.stop='deleteRequest(request.id)'>Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProjectRequests',
  computed: mapGetters(['project', 'projectRequests', 'unboundedRequests']),
  mounted() {
    this.getProjectRequests(this.$route.params.id)
      .then(() => {
        if (!this.project.name) this.$router.push('/projects');
      });
    this.getUnboundedRequests();
  },
  methods: {
    ...mapActions(['getProjectRequests', 'getUnboundedRequests', 'deleteRequest', 'bindRequest', 'unbindRequest']),
    onRequestClick(requestId) {
      this.$router.push(`/request/${requestId}?projectId=${this.project.id}`);
    },
    onEditClick(requestId) {
      this.$router.push(`/request/edit/${requestId}?projectId=${this.project.id}`);
    }
  },
};
</script>

<style scoped>

</style>
