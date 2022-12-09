import axios from "../axios";

export const request = {
  actions: {
    getRequest: async (context, id) => {
      const request = await axios("/request/" + id);
      context.commit("updateRequest", request.data);
      context.commit("updateProjectStatus", request.data.statusId);
    },
    createRequest: async (context, data) => {
      await axios.post("/request", data);
    },
    editRequest: async (context, { id, ...data }) => {
      await axios.patch("/request/" + id, data);
    },
    deleteRequest: async (context, id) => {
      await axios.delete("/request/" + id);
      context.commit("deleteRequest", id);
    },
    bindRequest: async (context, { requestId, projectId }) => {
      await axios.post(`/request/${requestId}/bind/${projectId}`);
      context.commit("bindRequest", requestId);
    },
    unbindRequest: async (context, { requestId, projectId }) => {
      await axios.post(`/request/${requestId}/unbind/${projectId}`);
      context.commit("unbindRequest", requestId);
    },
    setNextStatus: async (context, { requestId, statusId }) => {
      const request = await axios.post(`/request/${requestId}/status/next`, {
        statusId,
      });
      context.commit("updateRequest", request.data);
      context.commit("updateProjectStatus", request.data.statusId);
    },
    setPrevStatus: async (context, { requestId, statusId }) => {
      const request = await axios.post(`/request/${requestId}/status/prev`, {
        statusId,
      });
      context.commit("updateRequest", request.data);
      context.commit("updateProjectStatus", request.data.statusId);
    },
  },
  mutations: {
    updateRequest: (state, request) => {
      state.request = request;
    },
  },
  state: {
    request: {},
  },
  getters: {
    request: (state) => state.request,
  },
};
