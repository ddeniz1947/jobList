
<template>
    <div class="container-fluid job-detail-wrapper">
        <div class="row">
            <div class="col-md-6">
                <h3>{{ selectedJob.jobTitle }}</h3>
                <h6>Job Type: {{ selectedJob.jobType }}</h6>
                <h6>Description: {{ selectedJob.jobType }}</h6>
                <h6>Area: {{ selectedJob.jobType }}</h6>
                <h6>Location: {{ selectedJob.city }} / {{ selectedJob.country }}</h6>
            </div>
            <div class="col-md-6">
                <img class="selected-jod-image" :src="selectedJob.avatar" alt="">
            </div>
        </div>

    </div>
</template>
  
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {

    name: 'JobDetail',
    setup() {
        const store = useStore();
        const jobList = computed(() => store.state.jobList);
        const selectedJob = ref();
        return {
            jobList,
            selectedJob
        }
    },
    created() {
        let filteredJob = this.jobList.find(job => job.id === this.$route.params.id)
        this.selectedJob = filteredJob;
    }
}
</script>
  
<style>
.job-detail-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    row-gap: 20px;
}


.job-detail-wrapper>.row {
    border: 1px solid black;
    padding: 10px;
    border-radius: 25px;
    box-shadow: 2px 2px 0px 0px grey;
}

.selected-jod-image {
    width: 250px;
}

@media screen and (max-width:500px) {
    .selected-jod-image {
        width: 50%;
    }
}
</style>
  