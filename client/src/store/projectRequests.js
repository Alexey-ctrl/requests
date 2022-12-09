import axios from "../axios";

export const projectsRequests = {
  actions: {
    getProjectRequests: async (context, id) => {
      const projectRequests = await axios(`/project/${id}/requests`);
      const { requests, ...project } = projectRequests.data;
      context.commit("updateProject", project);
      context.commit("updateProjectRequests", requests);
    },

    getUnboundedRequests: async (context) => {
      const requests = await axios(`/requests`);
      context.commit("updateUnboundedRequests", requests.data);
    },
  },
  mutations: {
    updateProjectRequests: (state, requests) =>
      (state.projectRequests = requests),
    updateUnboundedRequests: (state, requests) =>
      (state.unboundedRequests = requests),
    deleteRequest: (state, id) => {
      state.projectRequests = state.projectRequests.filter(
        (request) => request.id !== id
      );
      state.unboundedRequests = state.unboundedRequests.filter(
        (request) => request.id !== id
      );
    },
    bindRequest: (state, requestId) => {
      let boundedRequestIndex = null;
      state.unboundedRequests.forEach((request, index) => {
        if (request.id === requestId) {
          boundedRequestIndex = index;
          return false;
        }
      });
      state.projectRequests.push(state.unboundedRequests[boundedRequestIndex]);
      state.unboundedRequests.splice(boundedRequestIndex, 1);
    },
    unbindRequest: (state, requestId) => {
      let unboundedRequestIndex = null;
      state.projectRequests.forEach((request, index) => {
        if (request.id === requestId) {
          unboundedRequestIndex = index;
          return false;
        }
      });
      state.unboundedRequests.push(
        state.projectRequests[unboundedRequestIndex]
      );
      state.projectRequests.splice(unboundedRequestIndex, 1);
    },
  },
  state: {
    projectRequests: [],
    unboundedRequests: [],
  },
  getters: {
    projectRequests: (state) => state.projectRequests,
    unboundedRequests: (state) => state.unboundedRequests,
  },
};
