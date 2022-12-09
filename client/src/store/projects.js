import axios from "../axios";

export const projects = {
  actions: {
    getProjects: async (context) => {
      const projects = await axios("/projects");
      context.commit("updateProjects", projects.data);
    },
    deleteProject: async (context, id) => {
      await axios.delete("/project/" + id);
      context.commit("deleteProject", id);
    },
  },
  mutations: {
    updateProjects: (state, projects) => (state.projects = projects),
    deleteProject: (state, id) =>
      (state.projects = state.projects.filter((project) => project.id !== id)),
  },
  state: {
    projects: [],
  },
  getters: {
    projects: (state) => state.projects,
  },
};

export const project = {
  actions: {
    getProjectById: async (context, id) => {
      const project = await axios("/project/" + id);
      context.commit("updateProject", project.data);
    },
    createProject: async (context, name) => {
      await axios.post("/project", { name });
    },
    editProject: async (context, { id, name }) => {
      await axios.patch("/project/" + id, { name });
    },
  },
  mutations: {
    updateProject: (state, project) => (state.project = project),
  },
  state: {
    project: null,
  },
  getters: {
    project: (state) => state.project,
  },
};
