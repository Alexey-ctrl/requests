import { Store } from "vuex";
import { projects, project } from "./projects";
import { projectsRequests } from "./projectRequests";
import { request } from "./request";
import { status } from "./status";

export default new Store({
  modules: [projects, project, projectsRequests, request, status],
});
