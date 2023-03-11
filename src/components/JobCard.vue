

  
<template>
    <div class="card col-4" style="max-width: 18rem; min-width: 18rem;" :key="key" v-for="(job, key) in jobList">
        <div class="card-body">
            <h5 class="card-title">{{ job.jobTitle }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ job.jobType }}</h6>
            <p class="card-text">{{ job.jobDescription }}</p>
            <p class="card-text">{{ job.country }} / {{ job.city }}</p>
            <router-link class="link" :to="`/jobDetail/${job.id}`">Go to details...</router-link>
        </div>
    </div>
</template>
  
<script>
export default {

    name: 'JobCard',
    props: {
        jobList: Array
    }
}
</script>
  
<style></style>
  