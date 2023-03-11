import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    jobList: [],
    selectedPageNum: 1,
    pageCount: 10,
    isPageGotError: false,
    isLoading: false,
  },
  getters: {},
  mutations: {
    SAVE_TITLE(state, test) {
      state.title = test;
    },
    GET_JOBS(state, { page, city, country, searchText }) {
      state.isLoading = true;
      axios
        .get(process.env.VUE_APP_MOCK_API_ENDPOINT + "/joblist", {
          params: {
            page: page,
            limit: 10,
            ...(city ? { city: city.toString().trim() } : {}),
            ...(country ? { country: country.toString().trim() } : {}),
            // ...(jobTitle ? { filter: jobTitle } : {}),
          },
        })
        .then((jobsResponse) => {
          if (searchText) {
            state.jobList = jobsResponse.data.filter(
              (v) =>
                Object.keys(v).filter((key) =>
                  v[key]
                    .toString()
                    .toLowerCase()
                    .includes(searchText.toString().toLowerCase())
                ).length > 0
            );
          } else {
            state.jobList = jobsResponse.data;
          }

          if (
            !(jobsResponse.data.length < 10) &&
            state.selectedPageNum === state.pageCount
          ) {
            state.pageCount++;
          }
          state.isPageGotError = false;
          state.isLoading = false;
        })
        .catch(() => {
          state.isPageGotError = true;
          state.isLoading = false;
        });
    },
    SAVE_PAGE_NUM(state, pageNum) {
      state.pageNum = pageNum;
    },
  },
  actions: {
    saveTitle({ commit }, title) {
      commit("SAVE_TITLE", title);
    },
    getJobs({ commit }, { page, city, country, searchText }) {
      console.log(city, country);
      commit("GET_JOBS", { page, city, country, searchText });
    },
    savePageNum({ commit }, pageNum) {
      commit("SAVE_PAGE_NUM", pageNum);
    },
  },
});

export default store;
