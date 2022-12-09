import axios from "../axios";

export const status = {
  actions: {
    getStatuses: async (context) => {
      const statuses = await axios("statuses");
      context.commit("updateStatuses", statuses.data);
    },
  },
  mutations: {
    updateStatuses: (state, statuses) => {
      state.statuses = statuses;
    },
    updateProjectStatus: (state, statusId) => {
      state.currentStatus = state.statuses.find(
        (status) => status.id === statusId
      );
      state.nextStatuses = state.statuses.filter(
        (status) => status.stage === state.currentStatus.stage + 1
      );
      state.prevStatuses = state.statuses.filter(
        (status) => status.stage === state.currentStatus.stage - 1
      );
    },
  },
  state: {
    currentStatus: {},
    statuses: [],
    nextStatuses: [],
    prevStatuses: [],
  },
  getters: {
    statuses: (state) => state.statuses,
    currentStatus: (state) => state.currentStatus,
    nextStatuses: (state) => state.nextStatuses,
    prevStatuses: (state) => state.prevStatuses,
  },
};
