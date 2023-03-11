<template>
  <div v-if="isPageGotError === false">
    <div class="container justify-content-center" >
      <div class="row">
        <JobFilter />
      </div>
      <div class="row card-wrapper">
        <Loader v-if="isLoading"/>
        <JobCard :jobList="jobList" v-else/>
      </div>
    </div>
    <paginate class="pagination" :page-count="pageCount" :container-class="pagination" :prev-text="prev" :next-text="next"
      :page-range="3" :margin-pages="2" :click-handler="clickCallback" :initial-page="selectedPageNum">
    </paginate>
  </div>
  <div class="container justify-content-center" v-else>
    <div class="row">
      <Error />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Paginate from "vuejs-paginate-next";
import JobCard from "./JobCard.vue";
import JobFilter from "./JobFilter.vue";
import Error from "./Error.vue";
import Loader from "./Loader.vue";
import { useStore } from "vuex";

export default {
  components: {
    paginate: Paginate,
    JobCard: JobCard,
    JobFilter: JobFilter,
    Error: Error,
    Loader: Loader
  },
  name: 'JobList',
  props: {
    msg: String,

  },
  setup() {
    const store = useStore();
    const isPageGotError = computed(() => store.state.isPageGotError);
    const jobList = computed(() => store.state.jobList);
    const selectedPageNum = computed(() => store.state.selectedPageNum);
    const pageCount = computed(() => store.state.pageCount);
    const isLoading = computed(() => store.state.isLoading);
    function clickCallback(pageNum) {
      store.dispatch('savePageNum', pageNum);
      store.dispatch('getJobs', { page: pageNum });
    }

    function save() {
      store.dispatch('saveTitle', "TESTTTTT12321");
    }

    return {
      store,
      jobList,
      pageCount,
      selectedPageNum,
      isPageGotError,
      isLoading,
      save,
      clickCallback
    }
  },
  created() {
    this.store.dispatch('getJobs', { page: 1 });
  }
}
</script>

<style scoped>
.black {
  color: black;
}

.card-wrapper {
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

.pagination-container {
  display: flex;
  column-gap: 10px;
}

.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}

.paginate-buttons:hover {
  background-color: #d8d8d8;
}

.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}

.active-page:hover {
  background-color: #2988c8;
}

.pagination {
  justify-content: center;
  margin-top: 10px;
}
</style>
