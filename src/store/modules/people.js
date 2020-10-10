import { PEOPLE_ENDPOINTS } from "@/core/API";

export default {
  namespaced: true,
  state: {
    peopleList: [],
    peopleIsLoading: false,
    table_options: {
      search: "",
      current_page: 1,
      count: 0,
      previous: null,
      next: null,
    },
  },
  mutations: {
    SET_SEARCH_AREA(state, search_value){
      state.table_options.search = search_value;
    },
    SET_PAGE_NUMBER(state, page_number) {
      state.table_options.current_page = page_number;
    },
    SET_PEOPLE_LOADING(state, loading_boolean) {
      state.peopleIsLoading = loading_boolean;
    },
    SET_PEOPLE(state, people) {
      state.peopleList = people;
    },
    SET_TABLE_OPTIONS(state, options_payload) {
      state.table_options = options_payload;
    },
  },
  actions: {
    loadPeople({ state, commit }) {
      commit("SET_PEOPLE_LOADING", true);

      let { current_page, search } = state.table_options;

      this.$axios
        .get(
          `${PEOPLE_ENDPOINTS.people}/?page=${current_page}&search=${search}`
        )
        .then((response) => {
          if (response.status === 200) {
            let { results, count, next, previous } = response.data;

            commit("SET_PEOPLE", results);
            commit("SET_TABLE_OPTIONS", {
              count,
              next,
              previous,
              current_page,
              search: search,
            });
          }
          commit("SET_PEOPLE_LOADING", false);
        })
        .catch((error) => {
          commit("SET_PEOPLE_LOADING", false);
          throw new Error(error);
        });
    },
  },
  getters: {
    peopleIsLoading: (state) => state.peopleIsLoading,
    peopleList: (state) => state.peopleList,
    search: (state) => state.search,
    table_options: (state) => state.table_options,
  },
};
